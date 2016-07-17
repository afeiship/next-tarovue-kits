# 可能的报错处理：
# windows powershell ，因为在此系统中禁止执行脚本
# get-executionpolicy
# set-executionpolicy remotesigned
# http://www.xuebuyuan.com/489960.html


##Git bash ln -s invalid,so use cmd:

mklink %HOMEPATH%\.npmrc d:\github\fei-windows-bash\src\.npmrc
mklink %HOMEPATH%\.bashrc d:\github\fei-windows-bash\src\.bashrc
mklink %HOMEPATH%\.ssh d:\github\fei-windows-bash\src\.ssh
mklink %HOMEPATH%\.vimrc d:\github\fei-windows-bash\src\.vimrc
