<script>
  import games from './data/games.json';
  import PlatformIcons from './PlatformIcons.svelte';
</script>

<style>
  .games-table td, .games-table th {
    @apply border;
    @apply border-gray-200;
    @apply p-2;
  }

  .games-table tr:nth-child(odd) {
    @apply bg-gray-200;
  }
  
  .games-table tr:hover {
    @apply border-gray-200;
  }

  .games-table th {
    @apply sticky;
    @apply top-0;
    @apply py-2;
    @apply text-left;
    @apply bg-gray-800;
    @apply text-white;
    @apply shadow;
    @apply z-40;
  }
</style>

<section class="w-full pt-12">
  <table class="games-table w-full">
    <thead>
      <tr>
        <th>Title</th>
        <th>Platforms</th>
      </tr>
    </thead>
    <tbody>
      {#each games as game, i}
      <tr>
        <td>{game.title}</td>
        <td><PlatformIcons platforms={game.platforms} /></td>
      </tr>
      {/each}
    </tbody>
  </table>
</section>