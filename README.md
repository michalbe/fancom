FanCom - fancy commit manager
==============

Options available in `.fancom` config file:

```bash
#     ____
#    / __/___ _____  _________  ____ ___
#   / /_/ __ `/ __ \/ ___/ __ \/ __ `__ \
#  / __/ /_/ / / / / /__/ /_/ / / / / / /
# /_/  \__,_/_/ /_/\___/\____/_/ /_/ /_/
#                            by @michalbe
#
# Fancy Commit Manager Config file
# https://github.com/michalbe/fancom


# Name of the repository, default: name of the current repo
#reponame="reponame"

# Suffix added to the temporary created, developer's branch, default: 'temp'
#devsuffix="temp"

# Set to `1` to add random emoji file to the commit message, default: no
#emoji=1

# Add all the changes made in the repo to the commit, default: no
#addall=1

# Prefix added to the commit message, default: [REPONAME]
#prefix="Shit's on fire yo"

# Add branch name to the prefix of the commit, default: no
#branchincommit=1

# Skip the prefix in the commit message, default: no
#noprefix=1

# Open github compare page in the browser after succesfull push
#opencompare=1

# Github username, default: username of the owner of the current repo
#author="authorname"

```
