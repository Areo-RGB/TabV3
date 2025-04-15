$activeFiles = @(
    "alex.html",
    "ben.html",
    "bent.html",
    "finley.html",
    "lion.html", 
    "daten.html",
    "Übersicht.html",
    "uebersicht.html",
    "index.html"
)

$sourceDir = "C:\Users\Anwender\.templates\Tabler"
$destDir = "C:\Users\Anwender\.templates\Tabler\static\templates"

# Ensure destination directory exists
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Get all HTML files in the source directory
$htmlFiles = Get-ChildItem -Path $sourceDir -Filter *.html

# Move all HTML files that are not in the active files list
foreach ($file in $htmlFiles) {
    if ($activeFiles -notcontains $file.Name) {
        Write-Host "Moving $($file.Name) to templates directory..."
        Move-Item -Path $file.FullName -Destination (Join-Path $destDir $file.Name) -Force
    } else {
        Write-Host "Keeping $($file.Name) in place (active file)"
    }
}

Write-Host "File movement complete!"
