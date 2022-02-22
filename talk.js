//特定のメッセージに反応
function talk(client) {
    client.on ('messageCreate', (message) => {
        if(message.author.bot) return;
    
        const random = Math.floor( Math.random() * 60 );
    
        if (message.content === 'hello') {
            message.channel.send("HELLO!")
        };
        if (message.content === 'は？') {
            message.channel.send('やんのか？')
        };
        if (message.content === 'やんのか？') {
            message.channel.send('は？')
        };
        if (message.content && random === 0){
            message.channel.send('は？')
        };
        if (message.content && random === 1){
            message.channel.send('それはそう')
        };
        if (message.content && random === 2){
            message.channel.send('たしかに')
        };
    });
}

module.exports = talk;