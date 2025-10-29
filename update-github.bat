@echo off
REM === Script pentru actualizarea automată a repository-ului GitHub ===
cd /d "%~dp0"

echo ============================================
echo     🚀 ACTUALIZARE SITE NEXUS PE GITHUB
echo ============================================
echo.

REM === Adăugare toate modificările ===
git add .

REM === Creare commit cu data actuală ===
setlocal enabledelayedexpansion
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (
    set today=%%a-%%b-%%c
)
git commit -m "Actualizare automată - !today!"

REM === Push către GitHub ===
git push origin main

echo.
echo ✅ Modificările au fost urcate cu succes pe GitHub!
pause
