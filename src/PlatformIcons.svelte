<script>
  export let platforms;
  const imageMap = {
    win: 'windows.svg',
    mac: 'apple.svg',
    ps4: 'playstation.svg',
    xbo: 'xbox.svg',
    switch: 'switch.svg',
    mobile: 'mobile.svg',
    linux: 'linux.svg'
  }

  const getImagePath = (platform) => {
    console.log(platform.toLowerCase())
    return `images/${imageMap[platform.toLowerCase()]}`
  }
</script>

<div class="flex">
  {#each platforms as platform}
    <div class="pr-5">
      <img class="h-6" src={getImagePath(platform)} alt={`${platform}`} />
    </div>
  {/each}
</div>
