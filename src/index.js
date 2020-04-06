require('dotenv').config();

const Discord = require('discord.js');
const cron = require('node-cron');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
        
    cron.schedule('15 9,12,13,17 * * *', () => {
        console.log('sending message');
        client.channels.fetch(process.env.CHANNEL_ID).then(
            channel => channel.send('@everyone n\'oubliez pas d\'émarger !')
        );
    }, {
        timezone: "Europe/Paris"
    });
});

client.login(process.env.TOKEN);
