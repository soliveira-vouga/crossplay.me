<script>
  import games from './games.json';
</script>

<style>
  .games-table {
    padding: 4rem 1rem 1rem 1rem;
  }
  .games-table td, .games-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

  .games-table tr:nth-child(even){background-color: #f2f2f2;}

  .games-table tr:hover {background-color: #ddd;}

  .games-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #2f2f2f;
    color: #f2f2f2;
  }
</style>

<section class="games">
  <table class="games-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Platforms</th>
    </thead>
    <tbody>
      {#each games as game, i}
      <tr>
        <td>{game.title}</td>
        <td>{game.platforms}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</section>