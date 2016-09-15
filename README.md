# Webgame

## Setup

This app has been tested on CentOS 7 minimal install.

## Optional VM Instructions (to use locally)

### Download VirtualBox

### Download CentOS 7.2.1511 minimal install ISO

### Create VM
- Open VirtualBox
- New VM
    * Give it a name
    * Type: Linux
    * Version: Other Linux (64-bit)
    * Continue
    * Give it at least a couple GB of RM
    * VDI (VirtualBox Disk Image)
    * Dynamically allocated
    * At least a couple of GB of hard-drive space
- Right-click the new VM > select Settings
- Click System (optional increase cores)
    * Click Processor > increase the available cores

To get started, run the following command:
chmod +x setup.sh && ./setup.sh

NOTE: You may need to edit the epel-release version in setup.sh if 7-8 is no longer available.