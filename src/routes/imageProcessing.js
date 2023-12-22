const express = require('express');
const router = express.Router();

// POST endpoint to process vehicle image
router.post('/', (req, res) => {
    // Logic to receive and process vehicle image for license plate detection
    res.send('Sukses menerima gambar untuk dideteksi');
});

module.exports = router;
