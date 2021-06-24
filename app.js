const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
        console.log(message.body)
        if(message.body == 'hola' || message.body == 'Hola') {
            message.reply('Hola! Soy el bot de Agustin, como estas?');
        }
});

client.initialize();