---
title: Vazex waas deployment note by Sugeng
tags:
  - bitzaro
isPrivate: true
---

This document provides information, what I changed for deploying the WaaS API on a server.

1.  Create a new file in the repository called `ecosystem.config.js` for PM2.
2.  Create a new file called `run.sh` inside the `waas-api` folder for Git pull and app restart.
3.  Change the configuration in `/etc/mongod.conf` to enable security for authentication and expose binding to `0.0.0.0`.
4.  Change the password for the `shawn` user to `4Qvr4ijLGuQoxq` (this user can only read and write to the `waas` database).
5.  Install Nginx and set it up to run on port `8080` to expose the API.
6.  Open the firewall in AWS to allow traffic on ports `80` (HTTP), `443` (SSL), and `27017` (MongoDB).
7.  Access the backend at: `http://ec2-52-199-184-255.ap-northeast-1.compute.amazonaws.com:8080/ping`.
8.  Access the MongoDB at: `mongodb://shawn:4Qvr4ijLGuQoxq@ec2-52-199-184-255.ap-northeast-1.compute.amazonaws.com:27017/waas`.
9.  Use the following credentials for the admin MongoDB:
    - User: `admin`
    - Password: `acWSsvsTIyK79J2Y1K3W0ixViSz1Qo`
