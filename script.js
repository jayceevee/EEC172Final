const apiUrl = 'https://q4zp8p15nj.execute-api.us-east-1.amazonaws.com/default/getLeaderboard';

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#leaderboard tbody");
    data.forEach(player => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${player.player}</td>
        <td>${player.wins}</td>
        <td>${player.losses}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching leaderboard:", err);
  });
