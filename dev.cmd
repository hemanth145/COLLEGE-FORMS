@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "C:\Users\heman\Downloads\COLLEGE-FORMS"
call npm run dev -- --port 5174 --strictPort
