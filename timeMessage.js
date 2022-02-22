const cron = require('node-cron');

function timeMessage(){
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
}

module.exports = timeMessage;