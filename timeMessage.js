const cron = require('node-cron');
const channelid = '948217232822005881';

function timeMessage(client){
    cron.schedule('0 0 * * *', () => {
        const random = Math.floor( Math.random() * 10 )
        switch (random) {
            case 1:
                client.channels.cache.get(channelid).send('良い子は寝る時間ですよ')
                break;
            case 2:
                client.channels.cache.get(channelid).send('ぴゃああああああああ！')
                break;
            case 3:
                client.channels.cache.get(channelid).send('おやすみなさい')
                break;
            case 4:
                client.channels.cache.get(channelid).send('日付変わったってマ？')
                break;
            case 5:
                client.channels.cache.get(channelid).send('Zzz...')
                break;
            case 6:
                client.channels.cache.get(channelid).send('マンボ！')
                break;
            case 7:
                client.channels.cache.get(channelid).send('0時をお知らせします。')
                break;
            case 8:
                client.channels.cache.get(channelid).send('日付が変わりました。')
                break;
            case 9:
                client.channels.cache.get(channelid).send('寝ろ')
                break;
            default:
                client.channels.cache.get(channelid).send('おやすみ')
                break;
        }
        const today = new Date() ;
        const oomisoka = today.getFullYear() + "/12/31";
        const leftDays = Math.floor((Date.parse(oomisoka) - today.getTime() ) / (24*60*60*1000)) + 1;
        
        // 残り日数
        client.channels.cache.get(channelid).send('今年は残り'+leftDays+'日です')
    })
}

module.exports = timeMessage;