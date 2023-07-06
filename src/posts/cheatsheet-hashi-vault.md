---
title: Cheatsheet - Hashi Vault
date: 2023-01-21
tags:
  - hashivault
  - cheatsheet
---

```
export VAULT_ADDR="https://sample-cluster-public-vault-3515b9be.194f7aac.z1.hashicorp.cloud:8200";
export VAULT_NAMESPACE="admin"

// login with admin token
vault login
```

Create new 'apps' namespace with kv

```
vault secrets enable -path=apps hv
```

PUT and GET

```
vault kv put apps/config username='admin' password='admin'
vault kv get apps/config
```

Create and update policy

```
vault policy write POLICY_NAME apps.hcl
```

```
// apps.hcl

path "apps/*" {
  capabilities = ["read", "list", "create", "patch", "update"]
}
```

Create new token with policy

```
vault token create -policy=POLICY_NAME

// set the token expiry longer
vault token renew -increment=3600h TOKEN
```

Self host or local development with storage: https://developer.hashicorp.com/vault/docs/secrets/databases/mysql-maria
