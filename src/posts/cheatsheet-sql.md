---
title: 'Cheatsheet - PostGresQL'
date: '2019-10-03'
tags:
  - cheatsheet
  - postgresql
---

## Check remaining size

```
SELECT table_schema, ROUND(SUM(data_length+index_length)/1024/1024/1024,2) "size in GB" FROM information_schema.tables GROUP BY 1 ORDER BY 2 DESC;
```

```
SELECT ROUND(@@max_allowed_packet / POWER(1024,3), 2) as 'max_allowed_packet_in_gb',
       SUM(data_length + index_length) / POWER(1024,3) as 'data_size_in_gb'
FROM information_schema.TABLES;
```

For specific table:

```
SELECT @@max_allowed_packet as 'max_allowed_packet',
       (data_length + index_length) / POWER(1024,3) as 'data_size_in_gb'
FROM information_schema.TABLES where table_name = '<your_table_name>';
```

Or round it:

```
SELECT @@max_allowed_packet as 'max_allowed_packet',
       ROUND((data_length + index_length) / POWER(1024,3), 2) as 'data_size_in_gb'
FROM information_schema.TABLES where table_name = '<your_table_name>';
```

## Unknown collation: 'utf8mb4_0900_ai_ci'

```
sed -i 's/utf8mb4_0900_ai_ci/utf8_general_ci/g' backup.sql
sed -i 's/CHARSET=utf8mb4/CHARSET=utf8/g' backup.sql
```

## Dump and restore

```
mysqldump -h my.address.amazonaws.com -u my_username -p db_name > db_backup.sql

mysqldump -u [uname] -p db_name > db_backup.sql

mysqldump -u [uname] -p --all-databases > all_db_backup.sql

// multiple tables
mysqldump -u [uname] -p db_name table1 table2 > table_backup.sql
```

To dump and restore single table

```
mysqldump --host=dbfmylast --user=root --port=3306 -p db_name table_name > table_backup.sql

mysql> drop table table_name;

// verify table drop
mysql> use db_name;
mysql> show tables;

// restore
mysql --host=dbfmylast --user=root --port=3306 -p db_named < table_backup.sql
```

For Securo test database:

```
sudo mysqldump --host=ec2-3-138-158-180.us-east-2.compute.amazonaws.com --port=3307 -u root -p securo-backend > securo-backend_backup.sql
```

To restore

```
mysql -u root -p db_name < backup.sql
```

## Installing in Arch

https://www.youtube.com/watch?v=gZR_yotSpiY

## Creating time series table

CREATE TABLE crypto_history(
trade_date DATE NOT NULL,
ticker VARCHAR(15) NOT NULL,
open DOUBLE PRECISION,
high DOUBLE PRECISION,
low DOUBLE PRECISION,
close DOUBLE PRECISION,
volume INT,
quote_volume INT,
constraint "crypto_history_pkey"
primary key (ticker, trade_date)
);

## View data

TABLE table_name;

## Delete everything in table

TRUNCATE table_name;

## Alter

### Remove constraint

ALTER TABLE table_name DROP CONSTRAINT constraint_name;
