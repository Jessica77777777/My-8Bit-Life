git add .
set /p msg="Update note: "
git commit -m "%msg%"
git push origin main
pause