const express = require('express');
const router = express.Router();

// POST endpoint to register a new vehicle
router.post('/', (req, res) => {
    // Logic to register a new vehicle
    res.send('Sukses Menambahkan Kendaraan');
});

module.exports = router;
