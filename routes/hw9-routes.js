// HW9 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan

const express = require('express');
const router  = express.Router();

let cases  = [];   // in-memory case log — resets on server restart
let nextId = 1;

// GET /hw9/credentials — return detective clearance from .env
router.get('/credentials', (req, res) => {
  // Your code here
});

module.exports = router;