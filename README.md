# Webgame

## Setup

This app has been tested on CentOS 7 minimal install.

## Optional VM Instructions (to use locally)

### Download VirtualBox
    - https://www.virtualbox.org/wiki/Downloads

### Download CentOS 7.2.1511 minimal install ISO
    - http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1511.iso

### Create VM
- Open VirtualBox
- New
    * Give it a name
    * Type: Linux
    * Version: Other Linux (64-bit)
    * Continue
    * Give it at least a couple GB of RM
    * VDI (VirtualBox Disk Image)
    * Dynamically allocated
    * At least a couple of GB of hard-drive space
- Right-click the new VM > select Settings OR Click the orange settings gear
- Click System (optional increase cores)
    * Click Processor > increase the available cores
- Click Storage [IMPORTANT]
    * Click Empty in the Storage Tree
    * Now, over on the right-hand side of the window across from Optical Drive, click the DVD icon.
    * Choose Virtual Optical Disk File...
- Set up NICs (I give it 2, one bridged for internet, one host-only for "airplane mode" NOTE: Host-only adapter requires host-only network setup.)
    * I'm tired of explaining [try this](http://lmgtfy.com/?q=host-only+network+virtualbox).
- Boot up VM
    * Go through centos install process.

## Install webgame
On a fresh, minimal CentOS 7 install, run the following command:
```bash
sudo yum install -y wget && wget https://raw.githubusercontent.com/Schatzman/webgame/master/scripts/setup && sudo chmod +x setup && sudo ./setup
```

NOTE: You may need to edit the epel-release version in setup.sh if 7-8 is no longer available.