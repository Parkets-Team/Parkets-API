const express = require('express');
const router = express.Router();

// GET endpoint for parking info
router.get('/', (req, res) => {
    // Logic to return parking information for a specific vehicle
    res.send('Informasi parkir untuk kendaraan tertentu');
});

module.exports = router;
