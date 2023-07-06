---
title: 'Cheatsheet - devops'
date: 2022-11-20
tags:
  - cheatsheet
  - devops
---

<!-- vim-markdown-toc GFM -->

* [Node GRPC error](#node-grpc-error)
* [Test-first development](#test-first-development)
  * [Continuous Integration](#continuous-integration)

<!-- vim-markdown-toc -->

Remove -n to execute.

# Node GRPC error

Multiple node versions may cause this error.

Do these two things:

- Check `node -v`. Use `nvm` to change version.
- `rm -rf node_modules && rm package-lock.json && npm install`

# Test-first development

I do not write software test-first.

When you're coding an app, you're writing a draft to a story.

You want make it work quickly. You're not trying to make it right. Or trash the paper into the bin and start over.

You can code clearer if unit testing is not your first priority.

TDD is good if you know exactly what goes in and out. But you won't know 100% most of the time.

TDD claims that if you write test first, your app will not have bug in real life. That's unlikely.

I write tests if they help me finish this software faster.

If I reload my app many times to check if a feature is working, writing a test would save a lot of time.

[DHH share this view too](https://testandcode.com/45)

## Continuous Integration

Travis CI is easy to set-up and free only for public repo.

Jenkins is open source.

- [Installing Jenkins in Digital Ocean droplet](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-18-04)
- If you get error on starting Jenkins, try installing Java 8:

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get-update
sudo apt install oracle-java8-installer
```

- To change defaut port of 8080, edit `HTTP_PORT` in `/etc/default/jenkins`

Not sure how to use Jenkins yet.
