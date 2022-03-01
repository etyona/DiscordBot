const cron = require('node-cron');
const channelid = '948217232822005881';

function timeMessage(client){
    cron.schedule('0 0 * * *', () => {
        const today = new Date() ;
        const oomisoka = today.getFullYear() + "/12/31";
        const leftDays = Math.floor((Date.parse(oomisoka) - today.getTime() ) / (24*60*60*1000)) + 1;
        client.channels.cache.get(channelid).send('おやすみなさい')
        // 残り日数
        client.channels.cache.get(channelid).send('今年は残り'+leftDays+'日です')
    })
}

module.exports = timeMessage;