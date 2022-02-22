const cron = require('node-cron');
const channelid = '475938687222284310';

function timeMessage(client){
    const channel = client.channels.cache.get(channelid);

    cron.schedule('0 0 * * *', () => {
        const random = Math.floor( Math.random() * 10 );
        client.on ('ready', () => {
        switch (random) {
            case 1:
                channel.send('良い子は寝る時間ですよ');
                break;
            case 2:
                channel.send('ぴゃああああああああ！');
                break;
            case 3:
                channel.send('おやすみなさい');
                break;
            case 4:
                channel.send('日付変わったってマ？');
                break;
            case 5:
                channel.send('Zzz...');
                break;
            case 6:
                channel.send('マンボ！');
                break;
            case 7:
                channel.send('あくてぃが24時をお知らせします。');
                break;
            case 8:
                channel.send('日付が変わりました。');
                break;
            case 9:
                channel.send('寝ろ');
                break;
            default:
                channel.send('おやすみ');
                break;
        }
        });
    })
}

module.exports = timeMessage;