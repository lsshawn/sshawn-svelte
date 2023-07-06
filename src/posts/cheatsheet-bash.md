---
title: 'Cheatsheet - bash'
date: 2022-11-20
tags:
  - cheatsheet
  - bash
---

# batch rename files or replace string in file name

```
autoload -U zmv
zmv -Wn '*string_to_replace*' '*new_string'

# for renaming all files in subfolders
zmv -W '**/old* '**/new*'
```
