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

export function getPlatforms() {
  return [
    ['win', 'Windows'],
    ['mac', 'Apple'],
    ['ps4', 'PS 4'],
    ['ps3', 'PS 3'],
    ['xbo', 'Xbox One'],
    ['switch', 'Nintendo Switch'],
    ['ios', 'IOS'],
    ['android', 'Android'],
    ['linux', 'Linux'],
    ['vita', 'PS Vita']
  ]
}