// Jack Mumford 2025

// Using express
const express = require(`express`);
const app = express();
const PORT = 80;

// Information to send
app.get(`/`, (req, res) => {
    // Grab Date
    const time = Date.now();

    //String to be minified
    // Object to be sent
    const jackMumford = {
        message: "My name is Jack Edward Mumford",
        timestamp: time
    };
    res.json(jackMumford); // Send JSON response // This is how I minified the string
});

// Telling the port to listen
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);