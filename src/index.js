const config = require('./config.json');

const Discord = require('discord.js');
const cron = require('node-cron');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
        
    cron.schedule('15 9,12,13,17 * * *', () => {
        client.channels.fetch(config.channelId).then(
            channel => channel.send('@everyone n\'oubliez pas d\'émarger !')
        );
    });
});

client.login(config.token);
