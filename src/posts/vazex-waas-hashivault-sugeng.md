---
title: 'Hashi Vault self host note by Sugeng'
date: 2023-05-09
tags:
  - hashivault
  - bitzaro
isPrivate: true
---

## Prerequisites

- Ubuntu Server 20.04 LTS or later
- Root access to the server
- Basic knowledge of the command line interface

## Step 1: Update the system

Update the system by running the following command:

`sudo apt update && sudo apt upgrade -y`

## Step 2: Install MariaDB

Install MariaDB by running the following command:

`sudo apt install mariadb-server -y`

Once the installation is complete, run the following command to secure the MariaDB installation:

`sudo mysql_secure_installation`

user: root
pass: Ua7h8QU4ug

## Step 3: Install Hashicorp Vault

Run the following commands to install Hashicorp Vault:

```
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install vault -y
```

## Step 4: Configure MariaDB

Create a new database and user for Vault by running the following commands:

```
sudo mysql -u root -p

CREATE DATABASE vault;
CREATE USER 'vault'@'localhost' IDENTIFIED BY '4esz3wa2q1';
GRANT ALL PRIVILEGES ON vault.* TO 'vault'@'localhost';
FLUSH PRIVILEGES;
```

Exit the MySQL shell by running the following command:

`exit`

## Step 5: Configure Vault

Create a configuration file for Vault by running the following command:

`sudo nano /etc/vault.d/vault.hcl`

Add the following configuration to the file:

```
storage "mysql" {
  username = "vault"
  password = "4esz3wa2q1"
  database = "vault"
  table = "vault"
  address = "127.0.0.1:3307"
}

listener "tcp" {
  address = "0.0.0.0:8200"
  tls_disable = 1
}

disable_mlock = true
api_addr = "http://0.0.0.0:8200"
```

Save and exit the file.

## Step 6: Start the Vault server

Start the Vault server by running the following command:

`sudo vault server -config=/etc/vault.d/vault.hcl`

or create a file service

`sudo nano /etc/systemd/system/vault.service`

```
[Unit]
Description=Vault Service
After=network.target

[Service]
User=vault
Group=vault
PIDFile=/run/vault.pid
ExecStart=/usr/bin/vault server -config=/etc/vault.d/vault.hcl
ExecReload=/bin/kill -HUP $MAINPID
KillSignal=SIGTERM
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl daemon-reload
sudo systemctl start vault
sudo systemctl enable vault
```

`vault operator init`

This is you can use for open, every restarted your vault. Share each of this key to every key person to access data.

```
Unseal Key 1: SfMyabCI/4i0evn3y7JNkSFUbjY9L+7+xcOXfZg1iYpC
Unseal Key 2: sZKSRJLec+gjQgVaL01yOxZ80yL2Yn0HJzYIZqWiN+da
Unseal Key 3: JofjxxL9OpK+r+N15E8C7b5sEDmZ4f/Nmxg4jY+zHlRe
Unseal Key 4: HX9ijVnjnrq1tpg0+AgZr9YfjqogrVmrgpj0p7FYbwXt
Unseal Key 5: 0fNmnZGEHxYZiS4LB4dC1cMAdYO1iMbaS+3TBHILW+G1

Initial Root Token: hvs.EsiHxNnlcn8M487tMWL3L8RR
```

## Step 7: Verify the installation

Verify the installation by running the following command:

`vault status`

If the installation was successful, you should see output similar to the following:

```
Key             Value
---             -----
Seal Type       shamir
Initialized     true
Sealed          false
Total Shares    0
Threshold       0
Version         1.7.3
Storage Type    mysql
Cluster Name    vault-cluster-<hash>
Cluster ID      <hash>
HA Enabled      false
```

Congratulations! You have successfully installed Hashicorp Vault with MariaDB on Ubuntu Server.
