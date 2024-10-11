// server.js
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para interpretar JSON e formulários URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para receber e armazenar o e-mail
app.post('/storeEmail', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email não fornecido');
    }

    // Adicionar o e-mail ao arquivo de e-mails
    fs.appendFile('emails.txt', `${email}\n`, (err) => {
        if (err) {
            console.error('Erro ao adicionar o e-mail:', err);
            return res.status(500).send('Erro interno ao armazenar o e-mail');
        }
        console.log(`E-mail ${email} adicionado com sucesso`);
        res.sendStatus(200);
    });
});

// Iniciar o servidor na porta 3000
// server.js
const PORT = process.env.PORT || 3001; // Altere para 3001 ou outra porta disponível
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});



