const express = require('express');
const router = express.Router();

// GET endpoint to check parking fees
router.get('/', (req, res) => {
    // Logic to check parking fees
    res.send('Informasi mengenai tarif parkir');
});

module.exports = router;
