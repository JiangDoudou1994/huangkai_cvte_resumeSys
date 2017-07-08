##git 获取远程分支

    1. 先获取远程信息 git fetch

    2. 再创建分支并拉取远程分支 git checkout -b 2b origin/2b
        2.1  本地有分支直接pull拉取即可。

    3  本地分支操作完之后，发布到远程分支。 git push origin 2b
        3.1  如果远程仓库没有我的分支，也可以这么push么？可以。

##git clone远程分支

    1.  git clone <remote/branch> -b <branch>