const express = require('express');

const app = express();

app.listen(3333,() => console.log('Server started on port 3333'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/user", (req, res) => {
    res.send("So here you are, finding your user");
});