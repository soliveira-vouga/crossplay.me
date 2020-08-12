<script>
  import games from './data/games.json';
  import PlatformIcons from './PlatformIcons.svelte';
  import { getPlatforms } from './helpers/utils'
import Header from './Header.svelte';

  let selected = []
  
  $: gameList = selected.length === 0 ? games :
    games.filter(game => checker(game.platforms.map(p => p.toLowerCase()), selected))

  const platforms = getPlatforms()
  const checker = (arr, target) => target.every(v => arr.includes(v))

  function toggleSelected(val) {
    if (selected.includes(val)) {
      selected = selected.filter(item => item !== val)
    } else {
      selected = [...selected, val]
    }
  }
</script>

<style>
  section {
    height: calc(100vh - 60px);
  }

  .games-table td, .games-table tbody th {
    @apply border;
    @apply border-gray-200;
    @apply p-2;
  }

  .games-table tbody tr:nth-child(odd) {
    @apply bg-gray-200;
  }
  
  .games-table tr:hover {
    @apply border-gray-200;
  }

  .games-table thead th {
    @apply sticky;
    @apply top-0;
    @apply p-2;
    @apply text-left;
    @apply bg-gray-800;
    @apply text-white;
    @apply shadow-xl;
    @apply z-10;
  }

  .games-table thead th:first-child {
    @apply left-0;
    @apply z-20;
  }

  .games-table tbody th {
    @apply text-left;
    @apply sticky;
    @apply left-0;
    @apply z-10;
    background-color: white !important;
    width:1%;
    white-space:nowrap;
  }

  .btn {
    @apply font-bold;
    @apply py-2; 
    @apply px-4;
    @apply mx-4;
    @apply rounded;
    @apply border;
    @apply border-gray-600;
  }
  .btn-blue {
    @apply bg-blue-500;
    @apply border-gray-200;
    @apply text-white;
  }

  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>

<section class="w-full flex flex-col">
  <div class="mx-auto mb-2 text-center flex-initial">
    {#each platforms as [value, text]}
      <button class="btn mb-4" class:btn-blue={selected.includes(value)} on:click={() => toggleSelected(value)}>{text}</button>
    {/each}
  </div>
  <div class="flex-auto h-full overflow-scroll">
    <table class="games-table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Platforms</th>
        </tr>
      </thead>
      <tbody>
        {#each gameList as game}
        <tr>
          <th>{game.title}</th>
          <td><PlatformIcons platforms={selected.length > 0 ? selected : game.platforms} /></td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>