require('dotenv').config();

const Discord = require('discord.js');
const CronJob = require('cron').CronJob;

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
        
    const job = new CronJob('25 9,12,13,17 * * *', () => {
        console.log('sending message');
        client.channels.fetch(process.env.CHANNEL_ID).then(
            (channel) => {
                const currentDate = new Date();
                channel.send('@everyone n\'oubliez pas d\'émarger ! Date :' + currentDate.toLocaleString('fr-FR', {timeZone: 'Europe/Paris'}))
            }
        );
    }, null, true, 'Europe/Paris');
    
    job.start();
});

client.login(process.env.TOKEN);
