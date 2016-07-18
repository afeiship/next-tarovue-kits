# 可能的报错处理：
# windows powershell ，因为在此系统中禁止执行脚本
# get-executionpolicy
# set-executionpolicy remotesigned
# http://www.xuebuyuan.com/489960.html


##Git bash ln -s invalid,so use cmd:

##Delete old files:
del /s /q %HOMEPATH%\.npmrc
del /s /q %HOMEPATH%\.bashrc
del /s /q %HOMEPATH%\.vimrc

rd /s /q %HOMEPATH%\.ssh
rd /s /q %HOMEPATH%\.atom



##Create soft link:
mklink %HOMEPATH%\.npmrc d:\github\fei-windows-bash\src\.npmrc
mklink %HOMEPATH%\.bashrc d:\github\fei-windows-bash\src\.bashrc
mklink %HOMEPATH%\.vimrc d:\github\fei-windows-bash\src\.vimrc

mklink %HOMEPATH%\.ssh d:\github\fei-windows-bash\src\.ssh
mklink %HOMEPATH%\.atom d:\github\fei-windows-bash\src\.atom
