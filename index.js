const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// discord BOTトークンの用意
const token = 'OTQ1MjMzMTQ5MTQxNTgxODM1.YhNK-A.xbc2WmMeebY5fNHPputCOm_YfKU';

// discord　ログイン時ログ
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on ('messageCreate', (message) => {
    if(message.author.bot) return;

    if (message.content === 'hello') {
        message.channel.send("HELLO!")
    };
    if (message.content === 'は？') {
        message.channel.send('やんのか？')
    };
    if (message.content === 'やんのか？') {
        message.channel.send('は？')
    };
});

// Discordへの接続
client.login(token);