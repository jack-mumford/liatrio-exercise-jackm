// Jack Mumford 2025

// Using express
const app = require('express')();
const PORT = 8080;

// Grab Date
const now = new Date();
const time = now.toLocaleTimeString();

//String to be minified
var jackMumford = `{
"message": "My name is Jack Mumford",
"timestamp": "${time}"
}`;

// Telling the port to listen
app.listen(
    PORT,
    () => console.log(JSON.stringify(JSON.parse(jackMumford)))
);

//JSON.stringify(JSON.parse(jackMumford))
// `it's alive on http://localhost:${PORT}`