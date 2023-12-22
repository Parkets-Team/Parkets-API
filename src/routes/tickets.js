const express = require('express');
const router = express.Router();

// POST endpoint to request a parking ticket
router.post('/', (req, res) => {
    // Logic to request a parking ticket
    res.send('Sukses request tiket parkir');
});

module.exports = router;
