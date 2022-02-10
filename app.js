const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage('5492216335888@c.us', 'Cliente listo!').then(response => {
        if(response.id.fromMe){
            console.log('El mensaje fue enviado')
        }
    })
});

client.on('message', message => {
        if(message.body == 'hola' || message.body == 'Hola') {
            message.reply('Hola! Soy el bot de Nancy, como estas?');
        }
});


client.initialize();