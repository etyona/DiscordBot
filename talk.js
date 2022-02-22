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
                message.channel.send('お？いいぞかかってこいよ')
            } else {
                message.channel.send('は？')
            }
        };
        //以下は!コマンド、特定のコマンド実行中に動作しない
        // if(!message.content.startsWith('!')){
        //     if (message.content && random === 0){
        //         message.channel.send('は？')
        //     };
        //     if (message.content && random === 1){
        //         message.channel.send('それはそう')
        //     };
        //     if (message.content && random === 2){
        //         message.channel.send('たしかに')
        //     };
        // }
    });
}

module.exports = talk;