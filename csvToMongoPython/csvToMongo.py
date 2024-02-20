import csv
from pymongo import MongoClient
from datetime import datetime
import calendar

host = 'localhost'
port = 32769
input_file_name = 'LegacyPaymentTotals_PIM.csv'

client = MongoClient(host, port)

db = client['fou']
collection = db['historicPayments']

batch_size = 10000
timeout_seconds = 300
with open(input_file_name) as file:
    reader = csv.DictReader(file)
    batch = []
    last_insert_time = datetime.now()
    for i, row in enumerate(reader):
        try:
            paidThroughMonth = row['PaidThroughMonth']
            paidThroughYear = row['PaidThroughYear']
            referenceText = 'MYFONTS-'+paidThroughMonth.rjust(2, '0')+'-'+paidThroughYear
            row['reference'] = referenceText
            row['invoiceDate'] = calendar.month_name[int(paidThroughMonth)]+' '+paidThroughYear
            row['vendorId'] = int(row['vendorId'])
            row['amount'] = float(row['amount'])
            batch.append(row)
            if len(batch) == batch_size or (datetime.now() - last_insert_time).total_seconds() >= timeout_seconds:
                result = collection.insert_many(batch)
                if result.acknowledged:
                    batch = []
                    last_insert_time = datetime.now()
                    print(f'Processed {i+1} records')
        except Exception as e:
            print(f'Error on row {i+1}: {e}')
    if batch:
        try:
            result = collection.insert_many(batch)
            if result.acknowledged:
                print(f'Processed {i+1} records')
        except Exception as e:
            print(f'Error on row {i+1}: {e}')
