const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('its alive on http://localhost:${PORT}')
)