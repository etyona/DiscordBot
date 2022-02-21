const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// discord BOTトークン 環境変数から取得
require('dotenv').config();
let token = process.env.TOKEN;


// discord　ログイン時ログ
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on ('messageCreate', (message) => {
    if(message.author.bot) return;

    const random = Math.floor( Math.random() * 50 );

    if (message.content === 'hello') {
        message.channel.send("HELLO!")
    };
    if (message.content === 'は？') {
        message.channel.send('やんのか？')
    };
    if (message.content === 'やんのか？') {
        message.channel.send('は？')
    };

    if (message.content && random === 0){
        message.channel.send('は？')
    };
});

// Discordへの接続
client.login(token);