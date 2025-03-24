// Jack Mumford 2025

const express = require(`express`);  // Import the express module
const app = express();  // Create an instance of express
const PORT = 80;  // Define the port number

// Information to send
app.get(`/`, (req, res) => {  // Define a route for the root URL

    // Grab Date
    const time = Date.now();  // Get the current timestamp

    //String to be minified and sent
    const jackMumford = {  // Create an object with the message and timestamp
        message: "My name is Jack E. Mumford",  // Message to be sent
        timestamp: time,
        extracredit: "done"
    };

    res.json(jackMumford); // Send JSON response
});

// Telling the port to listen
app.listen(  // Start the server and listen on the specified port
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)  // Log a message when the server starts
);