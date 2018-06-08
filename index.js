const fs = require('fs');
const Discord = require('discord.js');
const botSettings = require('./auth.json');

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands.${file}`);
    bot.commands.set(command.name, command);
}

console.log(botSettings.token);
console.log(botSettings.prefix);

bot.on('ready', () => {
    console.log(`Bot is ready with ${bot.users.size} users, in ${bot.channels.size} channels.`);
    message.channel.send('Ready!');
});

bot.on('guildCreate', () => {
    // do nothing for now
});

bot.on('message', async message => {
    // ignore message if it is from a bot
    if (message.author.bot)
        return;
    // ignore messages with no prefix
    if (!message.content.startsWith(botSettings.prefix))
        return;

    const args = message.content.slice(botSettings.prefix.length).split('/ +/');
    const cmd = args.shift().toLowerCase();

    if (!bot.commands.has(cmd))
        return;

    try {
        bot.commands.get(cmd).execute(message, args)
    } catch (error) {
        console.error(error);
        message.channel.send('Sumanai, but that command doesn\'t exist yet.');                        
    }

});

bot.login(botSettings.token);