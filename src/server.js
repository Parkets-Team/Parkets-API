const express = require('express');
const app = express();

// Import routers from the routes folder
const vehiclesRouter = require('./routes/vehicles');
const ticketsRouter = require('./routes/tickets');
const feesRouter = require('./routes/fees');
const spacesRouter = require('./routes/spaces');
const licensePlatesRouter = require('./routes/licensePlates');
const parkingInfoRouter = require('./routes/parkingInfo');
const imageProcessingRouter = require('./routes/imageProcessing');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routers for specific paths
app.use('/vehicles', vehiclesRouter);
app.use('/tickets', ticketsRouter);
app.use('/fees', feesRouter);
app.use('/spaces', spacesRouter);
app.use('/detected-license-plates', licensePlatesRouter);
app.use('/parking-info', parkingInfoRouter);
app.use('/process-image', imageProcessingRouter);

// Define a simple route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Parking Application API');
});

// Set the server to listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
