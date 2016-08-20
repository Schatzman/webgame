#!/bin/bash
sudo rpm -iUvh http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-8.noarch.rpm && \
sudo yum -y update && \
sudo yum install -y git && \
(cd /tmp && git clone --depth 1 https://github.com/twolfson/sexy-bash-prompt && cd sexy-bash-prompt && make install) && source ~/.bashrc && \
sudo yum -y install ansible && \
sed -i -e "s@NodePath@${PWD}/nodeSetup.sh@g" provision.yml && \
ansible-playbook provision.yml

# && \ is to stop rather than continue if a step fails.