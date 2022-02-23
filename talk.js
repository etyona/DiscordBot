//特定のメッセージに反応
function talk(client) {
    client.on ('message', async message => {
        if(message.author.bot) return;
    
        const ran100 = Math.floor( Math.random() * 100 );
        const ran4 = Math.floor( Math.random() * 4 );
        const ran2 = Math.floor( Math.random() * 2 );
        
        switch (message.content) {
            case 'おはよう':
                message.channel.send("ｵﾊﾖｳｺﾞｻﾞｲﾏｽ")
                break;
            case 'は？':
                message.channel.send("やんのか?")
                break;
            case 'やれ':
                message.channel.send("いいぞかかってこい")
                break;
            case '迷えば':
                message.channel.send("敗れる")
                break;
            case 'やんのか?':
                if(ran2){
                    message.channel.send('お？いいぞかかってこい')
                } else {
                    message.channel.send('やれ')
                }
                break;
            default:
                break;
        }
        //メンションに反応
        if (!message.mentions.members.size == 0 && ran4 === 0) {
            const reply = await message.channel.send('あくしろよ')
            setTimeout(() => {
                reply.delete();
            }, 30000)
        }
        //ランダムで発言
        if (ran100 === 0){
            switch (ran4) {
                case 0:
                    message.channel.send('それはそう')
                    break;
                case 1:
                    message.channel.send('たしかに')
                    break;
                case 2:
                    message.channel.send('間違いない')
                    break;
                case 3:
                    message.channel.send('かもです')
                    break;
            }
        }
    });
}

module.exports = talk;