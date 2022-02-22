//コマンドメイン処理

cmdArray = ['add A B','prompt'];
const prefix = '!'
function command(client) {
    client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return
        const [command, ...args] = message.content.slice(prefix.length).split(' ')
        if (command === 'help') {
            message.channel.send('現在使用可能なコマンド')
            cmdArray.forEach(cmdName => {
                message.channel.send('!' + cmdName+'\n')
            }); 
            return
        }
        if (command === 'add') {
            const [a, b] = args.map(str => Number(str))
            message.channel.send(`${a} + ${b} = ${a + b}`)
        }
        if (command === 'ping'){
            message.channel.send('Pong!');
        }
        if (command === 'prompt') {
            message.channel.send('yes か no を送信してください')
            const filter = msg => msg.author.id === message.author.id
            const collected = await message.channel.awaitMessages({ filter, max: 1, time: 10000 })
            const response = collected.first()
            if (!response) return message.channel.send('タイムアウト')
            if (!['yes', 'no'].includes(response.content)) return message.channel.send('正しくありません')
            message.channel.send(`${response.content} が送信されました`)
        }
    })
}

module.exports = command;