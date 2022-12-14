## Git Brownbag


- ### git's working directory, index, and repository || Git "HEAD" / tip
- ### git hashes (SHA-1)
- ### git branch
  - git branch (default with no options shows local branches only in alphabetical order)
  - git branch myNewBranchName (creates a new branch locally)
  - git branch --sort=-committerdate (sorts branches by most recent commit activity)
  - git branch -r (or --remotes) (get remote branch list)
  - git branch -a (--all) (shows all remote and local branches)
  - git branch -d (--delete) (deletes a local branch)
- ### git add
  - git add path/to/fileName (adds a single file to staging area)
  - git add . (adds all files with changes, that are new, or deleted to staging area) 
  - git add . --dry-run (does a test run of add but makes no changes)
  - git add --patch (or -p, allows you to choose which hunk to add to staging among other options)
- ### git status
  - git status (by default, shows staged and unstaged changes, as well as a local branch vs remote branch comparison)
  - git status --short (or -s) (shows short version of status log)
- ### git diff 
  - git diff (by default, shows unstaged differences in working tree) 
  - git diff --cached (shows diff for staged changes instead of only unstaged ones)
- ### git show
  - git show (by default, shows HEAD commit log info and code changes)
  - git show 927850d src/App.js (shows specific commit log and file changes)
- ### git commit
  - git commit (commits staged changes). 
    - Without -m option, opens inline vim editor where you can type your message and then save to finally commit.
    - Type 'i' to change to insert mode. type your message, then ctrl + x to bring up menu, ctrl + c to quit, then :wq to quit and save.
  - git commit -m 'my msg' (skips the editor and allows you to write your message directly)
  - git commit -am 'my msg' (does a git add . && git commit -m "my msg")
  - git commit --amend -m 'my new msg' (amends the most recent commit message by replacing it with a new commit)
  - git commit --amend --no-edit (adds a new change to the most recent commit by replacing it with a new commit)
    - ONLY use --amend on local repo to avoid conflicts!
    - Old commits are still available but not listed in the log
- ### git log
  - git log (by default, logs a list of commits in chronological order)
  - git log branchName (logs a list of commits that live on branchName)
  - git log -numAmount (limits # of logs shown)
  - git log --oneline (limits each log entry to one line and reduces / abbreviates information shown)
  - git log -p commitHash (shows logs with actual file changes starting from commitHash)
  - git log --abbrev-commit (abbreviates the commit hash)
  - git log --after=nov7 --before=nov9 (shows log history between 11/7/22 and 11/9/22)
  - git log --grep='text to search' (searches log for commit messages containing 'text to search')
  - git log --reverse (reverses the log output direction, shows oldest log entry first)
  - git log --pretty="%h %ad | %s [%an]" --date=short (can use --pretty to format log message style for easier consumption)
    - adding custom ANSI colors: git log --pretty="%C(colorname)%h %C(colorname)%an"
      - colors: normal, black, red, green, yellow, blue, magenta, cyan, white
      - attributes: bold, dim, ul (underline), blink, reverse, for example: git log --pretty='%C(yellow reverse)%h'
- ### git push 
  - git push --prune (removes remote branches if they don't have local counterpart)
  - git push --dry-run (does a test run of add but makes no changes)
- ### git pull (does git fetch + git merge)
  - git pull --prune (removes local branches if they don't exist on remote repo)
  - git pull --dry-run (does a test run of pull but makes no changes)  
- ### git checkout
  - git checkout branchName or commitHash (switches to branch or commit hash)
  - git checkout -b branchName (create new branch and switch to it) (this is the old way, git switch -c branchName  does the same thing)
  - git checkout path/To/File (discards unstaged changes)
- ### git switch
  - git switch branchName (switches to branch)
  - git switch -c newBranchName (create new branch and switch to it)  
  - git switch commitHash --detach (same as git checkout commitHash, moves HEAD to commit hash)
- ### git fetch 
  - git fetch (by default uses origin - downloads objects and refs from one or more repositories)
  - git fetch origin branchName && git switch branchName (fetches remote branch that you may not have locally, then switch to it)
  - git fetch then git log -p HEAD..origin/main (to view fetched changes, this compares local HEAD to remote)
- ### git merge
  - git merge branchName (merges commits from another branch into your current one)
  - git merge branchName --squash (takes all commit(s) changes from branchName and stages them together on current branch)
- ### git revert
  - git revert commitHash -n (--no-commit, reverts and stages changes without committing them) 
  - git revert commitHash --no-edit (creates a new commit that exactly inverses the changes of the commitHash)
- ### git restore
  - git restore file/path.js (discard uncommitted changes)
  - git restore --staged fileName (unstage added changes) new change
- ### git reset 
  - git reset (by default with no options or hash, unstages staged files and places them in working tree, same as --mixed) 
  - git reset --soft commitHash (puts commits made after commitHash into staged mode)
  - git reset --hard commitHash 
    - by default without commitHash, takes you back to local HEAD {last commit on current branch}. 
    - With it, takes you back to commitHash and clean working tree, further commits create alternate timeline- branch before changing things
- ### git stash
  - stores all the most recent changes in a stash (array) and resets the state of the workspace to the prior commit state
    - by default, does not stash untracked files (ie new files that are not yet tracked by git)
  - your stash stays the same between all branches on your repo, so you can stash on one branch and use it on another branch
  - git stash (equivalent to git stash push, takes current working directory changes and places them in your stash at stash@{0})
  - git stash list (lists stash entries) 
  - git stash show -p stash@{0} (most recent is stash@{0}, next oldest stash@{1}, next oldest stash@{2} etc.)
  - git stash drop stash@{1} (removes the 2nd entry in the stash array from the stash)
  - git stash pop (by default, takes the most recent stash item (stash@{0}) and adds it to unstaged in current branch) 
    - git stash pop stash@{num} (Takes specific stash entry and adds it to unstaged on current branch)
  - git stash apply (same as pop, but does not remove the stash entry from your stash)
  - git stash clear (completely clears out your stash, removes all entries with no warning!)
--------------------------------------------------------------------------------------------------------------------------------------------------

## git aliases
  - A way to truncate and customize git commands with or without options (for example, "git upstream" would run "git --set-upstream origin branchName")
  - #### Two ways to create aliases:
    - run this command to find your .gitconfig path: git config --list --show-origin (Windows Default -> C:/Users/username/.gitconfig)
      - open the file, find the [alias] code block or create it, and then type nameOfShortcut = actual command
      - ie. [alias] l = log --oneline
    - run git config --global alias.shortcutName "actual name of command" 
      - for example: git config --global alias.upstream "git push -u origin HEAD"
      - now you can use "git upstream" which will run "git push -u origin HEAD" for you  

--------------------------------------------------------------------------------------------------------------------------------------------------
## Other useful one-liners
- git rev-list --all --count
  - diplays total number of commits in your repo
- git shortlog
  - displays every commit with author name
  - git shortlog -s shows total number of commits by each author
