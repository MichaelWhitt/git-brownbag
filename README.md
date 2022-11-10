## Git Brownbag


- ### git's index, worktree, repository
- ### git branch
  - git branch --sort=-committerdate (sorts branches by most recent commit activity)
  - git branch -r /--remotes (get remote branch list)
- ### git add
  - git add . --dry-run (does a test run of add but makes no changes)
  - git add --patch  (or -p, allows you to choose which hunk to add to staging among other options)
- ### git status
  - git status -short (or -s) (shows short version of status log)
- ### git commit
  - git commit --amend -m 'my new msg' (amends the most recent commit message)
  - git commit --amend --no-edit (adds a new change to the most recent commit without creating a new one)
- ### git push 
  - git push --prune (removes remote branches if they don't exist on remote repo)
  - git push --dry-run (does a test run of add but makes no changes)
- ### git pull (does git fetch + git merge)
  - git pull --prune (removes local branches if they don't exist on remote repo)
  - git pull --dry-run (does a test run of pull but makes no changes)  
- ### git checkout
  - git checkout branchName or commitHash (switches to branch or commit hash)
  - git checkout -b (create new branch and switch to it) (this is the old way, git switch does the same thing)
- ### git fetch 
  - git fetch then git log -p HEAD..origin/master (to view fetched changes, this compares local HEAD to remote)
  - git fetch --prune origin (removes local branches if they don't exist on remote repo)
- ### git merge
  - git merge branchName (merges commits from another branch sequentially into your current one)
  - git merge branchName --squash (merges one commit that includes every commit on another branch into yours, and adds to staged)
- ### git switch
  - git switch branchName (switches to branch)
  - git switch -c newBranchName (create new branch and switch to it)
- ### git log
  - git log -numAmount (limits # of logs shown)
  - git log --oneline (limits each log entry to one line and reduces / abbreviates information shown)
  - git log -u / -p (shows logs with actual file changes)
  - git log --abbrev-commit (abbreviates the commit hash)
  - git log --reverse (reverses the log output direction, shows oldest log entry first)
  - git log --pretty=format:"%h %ad | %s %d [%an]" --date=short (can use format to format log message style for easier consumption)
- ### git revert
  - git revert commitHash --no-edit (creates + stages a new commit that exactly inverses the changes instead of deleting the entire commit)
- ### git restore
  - git restore fileName (discard uncommitted changes)
  - git restore --staged fileName (unstage added changes)
- ### git reset 
  - git reset --soft (puts future changes into staged mode)
  - git reset --hard (destroyed all changes and sets back to head)
- ### git diff 
  - git diff --cached (shows diff for staged changes instead of only unstaged ones)
- ### git show
  - git show 927850d src/App.js (shows specific commit changes)
- ### git stash
  - stores all the most recent changes in a workspace in a stash (array) and resets the state of the workspace to the prior commit state
  - git stash (equivalent to git stash push, takes current working directory changes and places them in your stash at stash@{0})
  - git stash list (lists stash entries) 
  - git stash show -p stash@{0} (most recent is stash@{0}, next oldest stash@{1}, next oldest stash@{2} etc.)
  - git stash drop stash@{1} (removes the 2nd entry in the stash array from the stash)
  - git stash pop (by default, takes the most recent stash item (stash@{0}) and adds it to unstaged in current branch) 
    - git stash pop stash@{num} (Takes specific stash entry and adds it to unstaged on current branch)
  - git stash apply (same as pop, but does not remove the stash entry from your stash)
  - git stash clear (completely clears out your stash, removes all entries with no warning!)
--------------------------------------------------------------------------------------------------------------------------------------------------

- ### git aliases
  - A way to truncate and customize git commands with or without options (for example, "git upstream" would run "git --set-upstream origin branchName")
  - #### Two ways to create aliases:
    - run this command to find your .gitconfig path: git config --list --show-origin (Windows Default -> C:/Users/username/.gitconfig)
      - open the file, find the [alias] code block or create it, and then type nameOfShortcut = actual command
      - ie. [alias] l = log --oneline
    - run git config --global alias.shortcutName "actual name of command" 
      - for example: git config --global alias.upstream "git push -u origin HEAD"
      - now you can use "git upstream" which will run "git push -u origin HEAD" for you  
