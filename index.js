const app = require('express')();
const PORT = 8080;
const now = new Date();
const time = now.toLocaleTimeString();
var jackMumford = `{
"message": "My name is Jack Mumford",
"timestamp": "${time}"
}`;



//var miniResponse = JSON.stringify(JSON.parse(jackMumford));

console.log(JSON.stringify(JSON.parse(jackMumford)));
//     PORT,
//     () => console.log(jackMumford)
// )