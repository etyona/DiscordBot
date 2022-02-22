//特定のメッセージに反応
function talk(client) {
    client.on ('messageCreate', (message) => {
        if(message.author.bot) return;
    
        const random = Math.floor( Math.random() * 60 );
    
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
        if (message.content && random === 1){
            message.channel.sendTyping('それはそう')
        };
        if (message.content && random === 2){
            message.channel.sendTyping('たしかに')
        };
    });
}

module.exports = talk;