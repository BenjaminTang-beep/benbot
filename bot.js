const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzEwMTYyMTM5MDY2NjYzMDA0.XsR2OA.H99oa3w4LWN2f1tK6Mam-fqhM-E);//BOT_TOKEN is the Client Secret