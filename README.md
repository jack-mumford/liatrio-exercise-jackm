# Liatrio-Exercise-JackM
Liatrio Apprenticeship Interview Exercise 2025

Once you've cloned the repository, create an AWS ec2 instance and run it with ubuntu, rather than amazon linux

![Screenshot 2025-03-22 at 11 55 53 PM](https://github.com/user-attachments/assets/e52a9337-3618-4b71-be95-ac16c6b50bdf)

Make sure you create a new key and move the .pem into the repository on your personal machine

![Screenshot 2025-03-22 at 11 57 24 PM](https://github.com/user-attachments/assets/85bf823a-fd37-4130-8363-92647e309b99)

Then, ssh into the newly created ec2 instance

![Screenshot 2025-03-22 at 11 54 40 PM](https://github.com/user-attachments/assets/773e72ec-f220-43a0-9420-c411b86b0154)

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
Now, anytime you commit to github it will be uploaded to dockerhub. From there, the github runner on aws will pull it and build it which is then placed onto a webpage
