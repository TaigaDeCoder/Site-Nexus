@echo off
cd /d "%~dp0"

echo ============================================
echo     🚀 ACTUALIZARE SITE NEXUS PE GITHUB
echo ============================================
echo.

git add .
setlocal enabledelayedexpansion
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (
    set today=%%a-%%b-%%c
)
git commit -m "Actualizare automata - !today!"

echo 🔄 Sincronizare cu GitHub...
git pull origin main --rebase

echo 🚀 Trimitere modificari...
git push origin main

echo.
echo ✅ Modificarile au fost urcate cu succes pe GitHub!
pause
