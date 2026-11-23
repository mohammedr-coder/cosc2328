

function loadRoster() {
  fetch('/api/hw11/monsters', { credentials: 'same-origin' })
    .then(res => res.json())
    .then(monsters => {
      const roster = document.getElementById('roster');
      roster.innerHTML = '';
      let teamCount  = 0;
      let teamNames  = [];

      monsters.forEach(m => {
        if (m.onMyTeam) {
          teamCount++;
          teamNames.push(m.name);
        }

        const card = document.createElement('div');
        card.className = 'monster-card' + (m.onMyTeam ? ' on-team' : '');
        card.innerHTML = `
          <strong>${m.name}</strong> <em>(${m.species})</em>
          <span>ATK ${m.attack} | DEF ${m.defense} | HP ${m.hp}</span>
          <div class="card-actions">
            <button class="team-btn" data-id="${m.id}" data-on="${m.onMyTeam}">
              ${m.onMyTeam ? '★ Remove' : '☆ Add to Team'}
            </button>
            <button class="retire-inline-btn" data-id="${m.id}">Retire</button>
          </div>
        `;
        roster.appendChild(card);
      });

      // Update the team panel
      const panel = document.getElementById('team-panel');
      panel.innerHTML = teamCount > 0
        ? `<strong>My Team (${teamCount}):</strong> ${teamNames.join(', ')}`
        : '<em>No monsters on your team yet. Click ☆ to add one.</em>';

      // Wire up team toggle buttons
      document.querySelectorAll('.team-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id    = btn.dataset.id;
          const onTeam = btn.dataset.on === 'true';
          const url   = onTeam ? '/api/hw11/team/remove' : '/api/hw11/team/add';
          fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
          })
            .then(() => loadRoster())
            .catch(err => console.error('Team error:', err));
        });
      });

      // Wire up inline retire buttons
      document.querySelectorAll('.retire-inline-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          fetch('/api/hw11/monsters/' + btn.dataset.id, {
            method: 'DELETE',
            credentials: 'same-origin'
          })
            .then(res => res.json())
            .then(data => {
              document.getElementById('status').textContent =
                data.message || data.error || '';
              if (!data.error) loadRoster();
            })
            .catch(err => console.error('Retire error:', err));
        });
      });
    })
    .catch(err => console.error('Load error:', err));
}

loadRoster();


document.getElementById('recruit-form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data     = Object.fromEntries(formData);
  fetch('/api/hw11/monsters', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      document.getElementById('status').textContent =
        result.message || result.error || '';
      if (!result.error) {
        event.target.reset();
        loadRoster();
      }
    })
    .catch(err => console.error('Recruit error:', err));
});


document.getElementById('retire-btn').addEventListener('click', () => {
  const id = document.getElementById('retire-id').value;
  fetch('/api/hw11/monsters/' + id, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
    .then(res => res.json().then(data => ({ ok: res.ok, data })))
    .then(({ ok, data }) => {
      document.getElementById('status').textContent =
        data.message || data.error || '';
      if (ok) {
        document.getElementById('retire-id').value = '';
        loadRoster();
      }
    })
    .catch(err => console.error('Retire error:', err));
});


document.getElementById('clear-team-btn').addEventListener('click', () => {
  fetch('/api/hw11/team/clear', {
    method: 'POST',
    credentials: 'same-origin'
  })
    .then(() => loadRoster())
    .catch(err => console.error('Clear error:', err));
});