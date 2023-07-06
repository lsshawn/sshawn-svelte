---
title: dont use typescript enum
date: 2023-01-04 11:29
tags:
  - typescript
---

```ts
enum UserRole {
  User,
  Admin,
}
```

Don't use 'enum' because `UserRole.User` has a value of 0 and will never be true.

Do:

```
const userRoles = ['User', 'Admin', 'Staff'] as const
type UserRole = typeof UserRoles[number]

type User {
  role: UserRole
}
```

If you do this, you will not get the dot notation:

```
type UserRole = 'User' | 'Admin' | 'Staff'
```
