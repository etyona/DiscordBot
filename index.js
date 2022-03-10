const cron = require('node-cron');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });

const timeMessage = require('./timeMessage.js');
const commands = require('./command.js');

// discord BOTトークン 環境変数から取得
require('dotenv').config();
let token = process.env.TOKEN;

// discord BOT 起動時
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('!help');
});

//コマンド処理
commands(client);

//定時処理
timeMessage(client);

//特定のメッセージに反応
talk(client);

// Discordへの接続
client.login(token);