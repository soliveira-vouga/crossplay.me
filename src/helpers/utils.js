export function getPlatformImage(platform) {
  platform = platform.toLowerCase()
  const imageMap = {
    win: 'Windows.svg',
    mac: 'Apple.svg',
    ps4: 'PS.svg',
    ps3: 'PS.svg',
    xbo: 'Xbox_One.svg',
    switch: 'Nintendo_Switch.svg',
    ios: 'IOS.svg',
    android: 'Android.svg',
    linux: 'Tux.svg',
    vita: 'PS.svg'
  }

  return 'images/' + imageMap[platform]
}