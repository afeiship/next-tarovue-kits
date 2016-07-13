#fei-windows-bash
Fei's simple & cool windows bash env.

##ENV PATH:
### Initial PATH ENV by SETX.bats:
+ C:\Users\Administrator\AppData\Local\atom\app-1.8.0
+ C:\Program Files\Git\bin

###Initial Git info:
```sh
$ git config --global user.email "you@example.com"
$ git config --global user.name "Your Name"
```

###Initial ssh key to github:
+ command:
```sh
$ ssh-keygen.exe
$ cat ~/.ssh/id_rsa.pub > /e/github/fei-windows-bash/_data/id_rsa.pub
```
+ https://github.com/settings/ssh


###Get git tools:
+ https://www.git-scm.com/download/
+ cd e:/github
+ git clone git://afeiship/fei-windows-bash
+ open windows powershell run `e:/github/fei-windows-bash/src/initial_windows_bash.bat`
+ run `sh e:/github/fei-windows-bash/src/windows_bash_alias.sh`;
