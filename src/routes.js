const express = require('express');

const routes = express.Router();

routes.post('/login', (req, res) => {
    res.json({
        message: 'Login realizado com sucesso!',
        status: 'success'
    });
});


module.exports = routes;