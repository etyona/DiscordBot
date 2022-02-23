//特定のメッセージに反応
function talk(client) {
    client.on ('message', async message => {
        if(message.author.bot) return;
    
        const random = Math.floor( Math.random() * 4 );
        const ran2 = Math.floor( Math.random() * 2 );
    
        if (message.content === 'おはよう') {
            message.channel.send("ｵﾊﾖｳｺﾞｻﾞｲﾏｽ")
        };
        if (message.content === 'は？') {
            message.channel.send('やんのか？')
        };
        //メンションに反応
        if (!message.mentions.members.size == 0 && random) {
            const reply = await message.channel.send('あくしろよ')
            setTimeout(() => {
                reply.delete();
            }, 30000)
        }
        if (message.content === 'やんのか？') {
            if(ran2){
                message.channel.send('お？いいぞかかってこい')
            } else {
                message.channel.send('は？')
            }
        };
    });
}

module.exports = talk;