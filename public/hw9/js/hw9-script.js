// HW9 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan


// Step 11
async function loadCredentials() {
    const res  = await fetch('/hw9/credentials');
    const data = await res.json();
    const dl = document.getElementById('credentials');
    dl.innerHTML = '';
    Object.entries(data).forEach(([key, value]) => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = key;
    dd.textContent = value;
    dl.appendChild(dt);
    dl.appendChild(dd);
    }
)}





// Step 12
async function loadCases() {
    const res  = await fetch('/hw9/cases');
    const data = await res.json();
    const ul = document.getElementById('case-list');
    ul.innerHTML = '';
    if (data.length === 0) {
        const li = document.createElement('li');
        li.classList.add('empty-msg');
        li.textContent = 'No cases filed yet.';
        ul.appendChild(li);
        return;
    }
    data.forEach((m) => {
        const li = document.createElement('li');
        li.innerHTML = 
        `<div class="case-id">${m.id}</div>
        <div class="case-suspect">${m.suspect}</div>
        <div class="case-location">${m.location}</div><div class="case-notes">${m.notes || ''}</div>
        <div class="case-ts">${new Date(m.timestamp).toLocaleString()}</div>`;

        ul.appendChild(li);
    });
    
}



// Step 13
document.getElementById('log-btn').addEventListener('click', async (e) => {
  e.preventDefault();
    const suspect  = document.getElementById('suspect').value;
    const location = document.getElementById('location').value;
    const notes    = document.getElementById('notes').value;

  await fetch('/hw9/cases', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ suspect, location, notes })

  });


  });

    loadCredentials();
    loadCases();





