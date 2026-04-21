@echo off
echo កំពុងបើក CMD ទាំង 3...

start "Monitoring" cmd /k Monitoring.bat
start "Server" cmd /k Server.bat
start "Client" cmd /k Client.bat

echo បានបើក CMD ទាំង 3 រួចរាល់!
pause