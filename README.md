Git Brownbag

Addresses these concepts:

git clone
git branch | --sort=-committerdate | -r /--remotes (get remote branch list)
git add | --dry-run
git status | -short (-s)
git commit | --amend -m 'my new msg' 
git pull / push | --prune --dry-run
git checkout branch or commit | git checkout -b
git fetch --prune origin
git switch branch | -c newBranchName
git log | -numAmount --oneline -u --abbrev-commit --reverse   git log --pretty=format:"%h %ad | %s %d [%an]" --date=short
git revert
git reset --soft | --hard -> soft will put changes into stage mode. hard removes all changes and sets back to head.
git diff / show and inspector | git show c69e97c src/App.js
git stash | show -p stash@{0}      -> stash is an array of objects, most recent is 0, oldest 1+
git aliases
