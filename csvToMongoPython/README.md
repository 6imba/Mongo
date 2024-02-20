## CSV To Mongo Data Import
This script lets you import your CSV data into mongodb collection. The process happens in a batch process and the number of records to process in a single batch can be configured as well.

### Pre-Requisites
* Python3
* Pip3

### Packages Required
* pymongo
> pip3 install pymongo

### Configure Host, Port and Input File Name

Navigate to the file *csvToMongo.py* and change the variables below according to the correct platform. The file name provided should be the same as below and no change is necessary. In case you have change the file name, please update the *input_file_name* as well.

> host = 'localhost'
> 
> port = 32769
> 
> input_file_name = 'LegacyPaymentTotals_PIM.csv'

### Configure Batch Size
Navigate to the file *csvToMongo.py* and change the variable *batch_size* accordingly. Default is 10000 which works quite well and can be left as it is.
> batch_size = 10000


### Running the Script
Use the command below to start the import process. The script should show you the number of record being processed. After all records are imported, the script will terminate.
> python3 csvToMongo.py

## Tools Used
* Python