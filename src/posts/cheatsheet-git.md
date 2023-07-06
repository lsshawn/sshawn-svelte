# Git

# To keep local fork in synced with the original

```
git remote add upstream <ORIGIN_REPO_URL>
# download changes
git fetch upstream
# add changes to existing local work
git rebase
```

# Reset from local staging

`git reset` to remove from staging.

`git reset <ID>` will move us to previous commit without deleting.

Use with care: `get reset --hard <ID>`

Don't reset code after a commit is pushed to Github.

# Revert

`git revert <ID>` is like `reset --hard` but preserve the history.

# Amend commit

`git commit --amend -m "new commit message"`

To include staged files without revert or reset:
```
git add .
git commit --amend --no-edit
```

# Stash

`git stash save <name_of_stash>`

`git stash pop` restores recent stash.

Use `git stash list` to list stashes then `git stash apply <number>` 

# Rebase instead of merge

Keeps feature branch up-to-date with master branch without extra merge commit with `git rebase master`.

It'll look like you just started working on this feature.

If you're unsure of rebase, create a branch from feature branch and rebase there. Check if all works then delete it.

This is better to reduce commit histories, especially multiple people working on multiple features. It makes it harder to rollback to previous state if there is bug.

Don't rebase an active public branch because people are working on it.

This should only be done when you're working on your own private feature branch because it rewrites history. 

# Squash

This is the last thing you do before pull request or merge to master branch.

`git rebase master --interactive` to open an editor:

```
pick <ID> <commit message>
squash <ID> <commit message>
squash <ID> <commit message>
```

Saving the file will prompt a commit message.

`fixup` is similar but discards commit message.

You can commit a squash like `git commit --squash <COMMIT_ID>`.

Then `git rebase -i --autosquash`.

# Advanced tips

`git checkout -` to switch to previous branch.

Add and commit: `git commit -am "commit message"` 

Create alias: `git config --global alias.ac "commit -am"`

Use `bisect` as a binary search to search for which commit with bug:
```
git bisect start
git bisect bad
git bisect good // moves on to next git
```

To delete everything locally and restore to remote:
```
git fetch origin
git reset --hard origin/main
git clean -df // remove untracked files
```

# Hooks

Use `husky` to validate and link Javascript code before each commit.

