// 1. The things that express.json does is that it checks to make sure that the request is in Json format and parses Json
// and if it isn't in req then it will throw an error.
// 2. The difference between HTTP 200 and 201 is that 201 is used when the new misson is created and 
// 200 is used for deleting. You would use 201 when your creating new missions and 200 when your deleting a mission.
// 3. In order for the mission seed to persist, you would need something to store the mission seed.
// 4. The two people wouldn't see the same list of missions because it is using different datas and the information is in a different place.



// IC20 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan

const list = document.getElementById('mission-list');
const form = document.getElementById('mission-form');

async function loadMissions() {
  const res  = await fetch('/ic20/missions');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(m => {
    const li = document.createElement('li');
    li.innerHTML = `<p class="name">${m.name}</p><p class="dest">${m.destination}</p>`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name        = document.getElementById('mission-name').value.trim();
  const destination = document.getElementById('mission-dest').value.trim();
  await fetch('/ic20/missions', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, destination }),
  });
  form.reset();
  loadMissions();
});

loadMissions();