const cron = require('node-cron');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const talk = require('./talk.js');

// discord BOTトークン 環境変数から取得
require('dotenv').config();
let token = process.env.TOKEN;

// discord　ログイン時ログ
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('PO!')
});

//定時処理
cron.schedule('0 0 * * *', () => {
    const random = Math.floor( Math.random() * 10 );

    switch (random) {
        case 1:
            message.channel.send('良い子は寝る時間ですよ');
            break;
        case 2:
            message.channel.send('ぴゃああああああああ！');
            break;
        case 3:
            message.channel.send('おやすみなさい');
            break;
        case 4:
            message.channel.send('日付変わったってマ？');
            break;
        case 5:
            message.channel.send('Zzz...');
            break;
        case 6:
            message.channel.send('マンボ！');
            break;
        case 7:
            message.channel.send('あくてぃが24時をお知らせします。');
            break;
        case 8:
            message.channel.send('日付が変わりました。');
            break;
        case 9:
            message.channel.send('寝ろ');
            break;
        default:
            message.channel.send('おやすみ');
            break;
    }
})

//特定のメッセージに反応
talk(client);

// client.on('typingStart', typing => {
//     if (typing.channel.id !== 'タイピング表示を検知するチャンネルID') return
//     const target = client.channels.resolve('タイピング表示を出すチャンネルID')
//     target.sendTyping()
// })

// Discordへの接続
client.login(token);