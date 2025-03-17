// Jack Mumford 2025

// Using express
const express = require(`express`);
const app = express();
const PORT = 80;

// Grab Date
const time = Math.floor(Date.now() / 1000);

//String to be minified
var jackMumford = `{
"message": "My name is Jack Mumford",
"timestamp": "${time}"
}`;

// Information to send
app.get(`/`, (req, res) => {
    res.send(JSON.stringify(JSON.parse(jackMumford))); // This is how I minified the string
});

// Telling the port to listen
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);