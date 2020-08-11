<script>
  import { getPlatformImage } from './helpers/utils'
  export let platforms;
</script>
<style>
  sup {
    @apply font-bold;
  }
</style>

<div class="flex">
  {#each platforms as platform}
    <div class="pr-5">
      <img align="left" class="h-6" src={getPlatformImage(platform)} alt={`${platform}`} />
      {#if platform.toLowerCase() === 'ps4'}
        <sup>4</sup>
      {:else if platform.toLowerCase() === 'ps3'}
        <sup>3</sup>
      {:else if platform.toLowerCase() === 'vita'}
        <sup>vita</sup>
      {/if}
    </div>
  {/each}
</div>
