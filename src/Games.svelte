<script>
  import games from './data/games.json';
  import PlatformIcons from './PlatformIcons.svelte';

</script>

<style>
  .games-table td, .games-table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .games-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #2f2f2f;
    color: #f2f2f2;
  }
</style>

<section class="w-full pt-12">
  <form></form>
  <table class="games-table w-full">
    <thead>
      <tr class="even:bg-gray-200 hover:border-gray-200">
        <th>Title</th>
        <th>Platforms</th>
      </tr>
    </thead>
    <tbody>
      {#each games as game, i}
      <tr class="even:bg-gray-200 hover:border-gray-200">
        <td>{game.title}</td>
        <td><PlatformIcons platforms={game.platforms.split(',').map(p => p.trim())} /></td>
      </tr>
      {/each}
    </tbody>
  </table>
</section>