//特定のメッセージに反応
function talk(client) {
    client.on ('messageCreate', (message) => {
        if(message.author.bot) return;
    
        const random = Math.floor( Math.random() * 60 );
        const ran2 = Math.floor( Math.random() * 2 );
    
        if (message.content === 'おはよう') {
            message.channel.send("ｵﾊﾖｳｺﾞｻﾞｲﾏｽ")
        };
        if (message.content === 'は？') {
            message.channel.send('やんのか？')
        };
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