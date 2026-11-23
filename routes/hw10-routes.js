// HW10 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan

const express = require('express');
const router  = express.Router();
const db      = require('../db');






function buildPage(monsters, message, error, battle) {
  // ... returns a complete HTML document string

  
  return `<!DOCTYPE html>

    <html lang="en">
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/hw10/css/hw10.css"></link>
    </head>
    <body>


    ${monsters.map(m => `
    <div class="monsters">
    <p>Name: ${m.name}</p>
    <p>Species: ${m.species}</p>
    <p>Attack: ${m.attack}</p>
    <p>Defense: ${m.defense}</p>
    <p>HP: ${m.hp}</p>
    <p>ID: ${m.id}</p>
    </div>
    `)}

    
    ${message ? `<p class="banner-success">${message}</p>` : ''}

    ${error ? `<p class="banner-error">${error}</p>` : ''}

    <form action="/hw10/recruit" method="POST"> 
    <button type="submit">Recruit</button>
    <input id="name"      type="text"   name="name">
    <input id="species"      type="text"   name="species">
    <input id="attack"      type="number"   name="attack">
    <input id="defence"      type="number"   name="defence">
    <input id="hp"      type="number"   name="hp">

    </form>



    
    <div action="/hw10/retire" method="POST">
    <input type="number" id = "retire-id">  
    <button type="submit">retire</button>
    </div>

    <div action="/hw10/battle" method="POST"> 
        <button type="submit">battle</button>
         ${battle ? `<div class="battle-results">
        <p>Name: ${monster.name}</p>
        <p>Species: ${monster.species}</p>
        <p>Attack: ${monster.attack}</p>
        <p>Defence: ${monster.defence}</p>
        <p>Hp: ${monster.hp}</p>
        <p>Id: ${monster.id}</p>
            
            </div>` : ''} 
    </div>

    
<body>
</html>`



}


router.get('/', (req, res) => {
  const message = req.query.message || null;
  const error   = req.query.error   || null;
  db.all('SELECT * FROM monsters ORDER BY id', [], (err, rows) => {
    if (err) return res.status(500).send('<p>Database error: ' + err.message + '</p>');
    const html = buildPage(rows, message, error, null);
    res.send(html);
  });
});

router.post('/recruit', (req, res) => {
  const { name, species, attack, defense, hp } = req.body;
  db.run(
    'INSERT INTO monsters (name, species, attack, defense, hp) VALUES (?, ?, ?, ?, ?)',
    [name, species, attack, defense, hp],
    function (err) {
      if (err) return res.redirect('/hw10?error=' + encodeURIComponent(err.message));
      res.redirect('/hw10?message=' + encodeURIComponent('Monster recruited!'));
    }
  );
});


router.post('/retire', (req, res) => {
  const { id } = req.body;
  db.run('DELETE FROM monsters WHERE id = ?', [id], function (err) {
    if (err) return res.redirect('/hw10?error=' + encodeURIComponent(err.message));
    if (this.changes === 0) {
      return res.redirect('/hw10?error=' + encodeURIComponent('Monster not found.'));
    }
    res.redirect('/hw10?message=' + encodeURIComponent('Monster retired!'));
  });
});


router.post('/battle', (req, res) => {
  db.all('SELECT * FROM monsters', [], (err, rows) => {
    if (err) return res.redirect('/hw10?error=' + encodeURIComponent(err.message));
    if (rows.length < 2) {
      return res.redirect('/hw10?error=' + encodeURIComponent('Not enough monsters to battle!'));
    }

    let i = Math.floor(Math.random() * rows.length);
    let j;
    do { j = Math.floor(Math.random() * rows.length); } while (j === i);

    const a = rows[i];
    const b = rows[j];
    const scoreA = a.attack + a.defense + a.hp;
    const scoreB = b.attack + b.defense + b.hp;

    let winner = 'Draw!';
    if (scoreA > scoreB) winner = a.name + ' wins!';
    else if (scoreB > scoreA) winner = b.name + ' wins!';

    const battle = { a, b, scoreA, scoreB, winner };
    const html   = buildPage(rows, null, null, battle);
    res.send(html);
  });
});


module.exports = router;
