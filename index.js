const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// トークンの用意
const token = 'OTQ1MjMzMTQ5MTQxNTgxODM1.YhNK-A.GUp3robonf-ok52IaVSqCMNzbSQ';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on ('messageCreate', (message) => {
    if(message.author.bot) return;

    if (message.content === 'hello') {
        message.channel.send("HELLO!")
    };
    if (message.content === 'は？') {
        message.reply('やんのか？')
    };
    if (message.content === 'やんのか？') {
        message.reply('は？')
    };
});

// Discordへの接続
client.login(token);