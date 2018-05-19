const Discord = require('discord.js');
const bot = new Discord.Client();

console.log("hello world");

bot.on('ready', () => {
    console.log('Ready!');
});

bot.on('message', (message) => {
    if (message.content == 'How are you') {
        message.reply('我很好');
    }
});

bot.login('NDQ2NDgyNDQwMzQ5OTQxODAx.Dd9cuA.YedkUB3574jTEbLauBxA9OcjpSE');