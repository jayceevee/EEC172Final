const apiUrl = 'https://q4zp8p15nj.execute-api.us-east-1.amazonaws.com/default/getLeaderboard';

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#leaderboard tbody");

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear any existing rows just in case
      tbody.innerHTML = "";

      // Sort alphabetically for consistency (optional)
      data.sort((a, b) => a.player.localeCompare(b.player));

      data.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${player.player}</td>
          <td>${player.wins}</td>
          <td>${player.losses}</td>
          <td>${player.ties}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching leaderboard:", error);

      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="3">Unable to load leaderboard data.</td>`;
      tbody.appendChild(row);
    });
});
