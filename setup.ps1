$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$videoSrc = "C:\Users\MH-OS\Downloads\0_Mountain_Forest_1920x1080.mp4"
$publicDest = Join-Path $root "public\0_Mountain_Forest_1920x1080.mp4"
$rootDest = Join-Path $root "0_Mountain_Forest_1920x1080.mp4"

New-Item -ItemType Directory -Force -Path (Join-Path $root "public") | Out-Null

if (Test-Path $videoSrc) {
  Copy-Item $videoSrc $publicDest -Force
  Copy-Item $videoSrc $rootDest -Force
  Write-Host "Video copied to public/ and project root."
} else {
  Write-Warning "Video not found at $videoSrc — place 0_Mountain_Forest_1920x1080.mp4 in public/ manually."
}

Set-Location $root
npm install
Write-Host "Done. Run: npm run dev"
