---
title: How to easily connect to CPR GPU Server
subtitle: This will allow you to use powerful CPU and GPU cores for all your analysis pipelines.
updated: 2024-02-09T10:34:01Z
author: Sampath Amitash Gadi,
tags:
    - server
    - alphafold
    - python
---

## Step 1: Download and install Visual Studio Code

- [Download VS Code](https://code.visualstudio.com/).
- Install it.

## Step 2: Open VS Code and install the `Remote - SSH` extension

![VS Code Window](vscode1.png "Open VS Code and go to the extensions tab in the sidebar!")

## Step 3: Search for 'ssh' and install the 'Remote - SSH' extension from Microsoft

![VS Code Window](vscode2.png "Search for 'ssh' and install the 'Remote - SSH' extension from Microsoft")

## Step 4: Go to Remote Explorer

![VS Code Window](vscode3.png "Go to Remote Explorer")

## Step 5: Edit your ssh config file

![VS Code Window](vscode4.png "Click the gear icon and choose your ID's ssh config file")

## Step 6: Enter host details in the config file

```ssh_config
Host cprgpuserver
    HostName cprgpuhead01fl.unicph.domain
    User zfs274
```

The code should look like the screenshot below. Mind the indents. You have to give 1 tab space before `HostName` and `User`.

![VS Code Window](vscode5.png "Enter host details as follows")

## Step 7: Connect to the server

Click on the connect icon to open a new SSH connection to the server.

![VS Code Window](vscode6.png "Click the connect icon")

Enter your KU password and hit Enter.

This will open an SSH connection to the server.

![VS Code Window](vscode7.png "You are now connected!")

You can now open your work directory. Foe example `/projects/cpr-duxin`. You can also use the terminal to issue commands.
