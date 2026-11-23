

const express = require('express');
const router  = express.Router();
const db      = require('../db');

// routes go here
router.get('/monsters', (req, res) => {
  const team = req.session.team || [];
  db.all('SELECT * FROM monsters ORDER BY id', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const enriched = rows.map(m => ({
      ...m,
      onMyTeam: team.includes(m.id)
    }));
    res.json(enriched);
  });
});

router.post('/monsters', (req, res) => {
  const { name, species, attack, defense, hp } = req.body;
  db.run(
    'INSERT INTO monsters (name, species, attack, defense, hp) VALUES (?, ?, ?, ?, ?)',
    [name, species, attack, defense, hp],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: 'Monster recruited!', id: this.lastID });
    }
  );
});

router.delete('/monsters/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM monsters WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Monster not found.' });
    }
    res.json({ message: 'Monster retired!' });
  });
});

// Add a monster to My Team
router.post('/team/add', (req, res) => {
  const id = parseInt(req.body.id, 10);
  if (!req.session.team) req.session.team = [];
  if (!req.session.team.includes(id)) {
    req.session.team.push(id);
  }
  res.json({ team: req.session.team });
});

// Remove a monster from My Team
router.post('/team/remove', (req, res) => {
  const id = parseInt(req.body.id, 10);
  if (!req.session.team) req.session.team = [];
  req.session.team = req.session.team.filter(i => i !== id);
  res.json({ team: req.session.team });
});

// Clear My Team
router.post('/team/clear', (req, res) => {
  req.session.team = [];
  res.json({ team: req.session.team });
});

module.exports = router;

