# MongoDB

## Export and import to another database

```
# Export to a .gz file

mongodump --forceTableScan --uri="mongodb+srv://user:password@cluster0.iqbsq.mongodb.net/prod" --gzip --archive > outputFileName


# Import to database

mongorestore --uri="mongodb+srv://TARGET_MONGO_URI" --gzip --archive=PATH_TO_GZIP
```
