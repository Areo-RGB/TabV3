@echo off
git add .
git commit -m "Add average percentile KPI card to player pages with improved styling"
git push
echo.
echo Changes have been pushed to the repository.
echo This window will close automatically in 15 seconds...
timeout /t 15 > nul
