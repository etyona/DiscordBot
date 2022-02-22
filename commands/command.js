//コマンドメイン処理

//コマンド名一覧 !help で使用
cmdArray = ['add A B', 'roulet'];

const prefix = '!'
function command(client) {
    client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return
        const [command, ...args] = message.content.slice(prefix.length).split(' ')
        if (command === 'help') {
            message.channel.send('現在使用可能なコマンド')
            cmdArray.forEach(cmdName => {
                message.channel.send('!'+cmdName+'\n')
            }); 
            return
        }
        if (command === 'add') {
            const [a, b] = args.map(str => Number(str))
            message.channel.send(`${a} + ${b} = ${a + b}`)
        }
        if (command === 'roulet') {
            message.channel.send('要素の数を入力してください')
            const filter = msg => msg.author.id === message.author.id
            //10秒でタイムアウト
            const collected = await message.channel.awaitMessages({ filter, max: 1, time: 10000 })
            const rouletNum = collected.first()
            if (!rouletNum) return message.channel.send('タイムアウト')
            message.channel.send(`${rouletNum.content}の要素を持つルーレットを作成します`)
            //指定した数の要素を入力
            const rouletArray = [];
            for (let index = 0; index < rouletNum.content; index++) {
                message.channel.send(index+1 + 'つ目の要素を入力してください')
                const element = await message.channel.awaitMessages({ filter, max: 1, time: 10000 })
                const responce = element.first()
                if (!responce) return message.channel.send('タイムアウト')
                rouletArray.push(responce.content)
            }
            //入力した要素を一覧にして表示
            rouletArray.forEach(str => {
                message.channel.send(str+'\n')
            }); 
            message.channel.send('回す/start  やめる/quit')
            const res = await message.channel.awaitMessages({ filter, max: 1, time: 10000 })
            const responce = res.first()
            if (!responce) return message.channel.send('タイムアウト')
            //3秒後に結果を表示
            if(responce.content === 'start'){
                let random = Math.floor(Math.random() * rouletArray.length);
                let result = rouletArray[random];
                message.channel.sendTyping();
                setTimeout(() => {
                    message.channel.send(result + ' が選ばれました！！')
                }, 3000)
            } else if(responce.content === 'quit'){
                message.channel.send('やっぱやめました');
            } else {
                message.channel.send('不正な入力を検知したのでやめます')
            }
        }
    })
}

module.exports = command;