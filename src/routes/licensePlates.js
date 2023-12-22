const express = require('express');
const router = express.Router();

// GET endpoint for detected license plates
router.get('/', (req, res) => {
    // Logic to return detected license plate data
    res.send('Nomor kendaraan yang terdeteksi: ');
});

module.exports = router;
