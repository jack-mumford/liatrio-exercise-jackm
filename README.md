# Liatrio-Exercise-JackM
Liatrio Apprenticeship Interview Exercise 2025

First, create an aws ec2 instance and run it with ubuntu, rather than amazon linux

Then, ssh into the ec2 instance

Once you are connected, update the terminal

```
sudo apt-get update
```
Then, install docker engine
```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Once you have docker installed, go back to home ("cd") and follow github runner commands
After this is done, start the runner
```
./run.sh
```

make sure to 

Then, create a github runner using ubunutu, and follow the steps


First clone the repository if you have not
```
git clone *ssh key
```
