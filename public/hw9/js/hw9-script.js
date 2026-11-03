// HW9 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan


// Step 11
async function loadCredentials() {
    const res  = await fetch('/hw9/credentials');
    const data = await res.json();
    const dl = document.getElementById('credentials');
    dl.innerHTML = '';
}

    <dl id="credentials"></dl>


// Step 12
async function loadCases() {
    const res  = await fetch('/hw9/cases');
    const data = await res.json();
    const ul = document.getElementById('cases');
    ul.innerHTML = '';
}
<li class="empty-msg">No cases filed yet.</li> 


// Step 13
click.addEventListener('click', async () => {
    const suspect  = document.getElementById('suspect').value;
    const location = document.getElementById('location').value;
    const notes    = document.getElementById('notes').value;

{/* <button id="log-btn">Log Case</button>
<input id="suspect" placeholder="Suspect Name"></input>
<input id="location" placeholder="Location"></input>
<textarea id="notes" placeholder="Notes"></textarea>  */}
}); 


