## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<p>git add will move a file to the staging area in a repository (also known as the index). This command tells git to start tracking the file and any changes made to it.</p>

#### branch
<p> git branch will add a branch to the master repository. You can commit within a branch without having to commit to the master repository. Branches can be merged with a master, rebased to a master, or flat out removed. </p>

#### checkout
<p> git checkout will allow you to move between branches and the master within a repo when making commits.  </p>

#### clone
<p> git clone copies an existing git repository - most often, this is used to copy a remote repository to a local repository</p>

#### commit
<p>git commit will add any removals/changes made to a file to the local repo. </p>

#### fetch
<p> git fetch will pull any changes made to a repository from a remote source and add them as a local branch. The git diff cmd can be used to review the differences between the local copy and new branch, and then the git merge branch/master cmd can be used to incorporate the changes into the master on the local repo. </p>
	
#### log
<p> the git log cmd will show the history of all commits made to a local repo. Many paramenters can be used to maniuplate the commits that are shown, along with how they commits are displayed and to what level of detail they are displayed. </p>

#### merge
<p> git merge is used to combine the commits of a branch with another branch or the master repo. It is often best practice to run a git diff cmd using "git diff branch1..branch2" to review the changes before combining the two branches. To merge a branch with the master: git checkout master --> git merge new-branch </p>

#### pull
<p> git pull is used to update an existing local repo by downloading and incorporating any changes that were made to the remote repo. The pull cmd consolidates the git fetch and git merge cmds into one command. </p>

#### push
<p> git push will take all new commits made to a local repo and send them to a remote repo, which, in our case, lives in github's servers. </p> 

#### reset
<p> git reset -- hard <commit number> will undo everything back to the way it was at the referenced commit number. You could also reference a file loaded during a commit using 'git reset .new-file.txt' </p>

#### rm
<p> git rm is used to remove a file or directory within a repo. Often times git rm is used to remove a branch after it has been merged with the master. </p>


#### status


## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

<p>Push files to a remote repository</p>

<ol>
	<li>git remote add new-file</li>
	<li>git commit -m "message"</li>
	<li>git push</li>
</ol>

<p> fetch changes</p>

<ol>
	<li>git remote -v #check current remote</li>
	<li>git remote add upstream <url> #add new remote, if nescessary</li>
	<li>git remote -v #verify new remote </li>
	<li>git fetch upstream #this will store any changes made to the local repo in a new branch called upstream/master</li>
	<li>git branch -va #lists all local and remote tracking branches</li>
	<li>git checkout master #verify you are on the master branch</li>
	<li>git merge upstream/master #merge the changes from the new branch with the master </li>
</ol>

<p> Commit locally </p>

<ol>
	<li>git remote add file #add file to staging area, or index </li> 
	<li>git remote commit -m #commmit new file, or update an existing file </li>
</ol>

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

<p> Errors I encountered </p>

<p> Error: When attempting to use the cmd line to push my changes to my remote repo, I encountered the error "you have unmerged paths -- use git add to mark resolution"</p>

<p> Solution: I used text editor to open every file that had a conflict and then removed the conflict syntax and made any necessary adjustments. I then used git add <file> to upload the file with the reconciled differences. </p>

<p> Cause: the error exists because two or more edits had been made to the same content. In my case, it looked like two DBC editors had edited the same .md files for the phase_0_unit_1 repo. Git is unsure which edit should be accepted, so it asks the user to determine which edit to accept. </p>

## Release 6: Reflection