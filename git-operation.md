##git 获取远程分支

    1. 先获取远程信息 git fetch

    2. 再创建分支并拉取远程分支 git checkout -b 2b origin/2b
        2.1  本地有分支直接pull拉取即可。

    3  本地分支操作完之后，发布到远程分支。 git push origin 2b，直接push也可以。
        3.1  如果远程仓库没有我的分支，也可以这么push么？可以。

##git clone远程分支

    1.  上面是我已经选定了远程仓库，然后下载指定分支，直接clone项目的指定分支：
         git clone -b 4b git@github.com:wudao370859172/huangkai_cvte_resumeSys.git
         ps：顺便吐个槽，某度搜索的大部分blog的结果根本完全不准确，还是去看文档安心。

##git stash暂存冲突区域。

    1.  类似一个临时的commit操作，因为不用log信息，所以比较简洁。一般在原分支发生bug，需要
        调错的时候使用