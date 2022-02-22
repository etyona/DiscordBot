const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const cron = require('node-cron');

// discord BOTトークン 環境変数から取得
require('dotenv').config();
let token = process.env.TOKEN;


// discord　ログイン時ログ
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('PO!')
});

//定時処理
cron.schedule('30 * * * *', () => {
    const random = Math.floor( Math.random() * 10 );

    switch (random) {
        case 1:
            console.log('良い子は寝る時間ですよ');
            break;
        case 2:
            console.log('ぴゃああああああああ！');
            break;
        case 3:
            console.log('おやすみなさい');
            break;
        case 4:
            console.log('日付変わったってマ？');
            break;
        case 5:
            console.log('Zzz...');
            break;
        case 6:
            console.log('マンボ！');
            break;
        case 7:
            console.log('あくてぃが24時をお知らせします。');
            break;
        case 8:
            console.log('日付が変わりました。');
            break;
        case 9:
            console.log('寝ろ');
            break;
        default:
            console.log('おやすみ');
            break;
    }
})

//特定のメッセージに反応
client.on ('messageCreate', (message) => {
    if(message.author.bot) return;

    const random = Math.floor( Math.random() * 50 );

    if (message.content === 'hello') {
        message.channel.sendTyping("HELLO!")
    };
    if (message.content === 'は？') {
        message.channel.sendTyping('やんのか？')
    };
    if (message.content === 'やんのか？') {
        message.channel.sendTyping('は？')
    };

    if (message.content && random === 0){
        message.channel.sendTyping('は？')
    };
});

// Discordへの接続
client.login(token);