const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/check', (req, res) => {
    const url = req.query.url;
    fetch(url)
        .then(response => {
            if (response.ok) {
                res.json({ status: 'En línea' });
            } else {
                res.json({ status: 'Caída' });
            }
        })
        .catch(error => {
            res.json({ status: 'Caída' });
        });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
