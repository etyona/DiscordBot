//コマンドメイン処理

//コマンド名一覧 !help で使用
cmdArray = ['roulet', 'yts'];

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
        if (command === 'yts'){
            const [text] = args
            //引数が無ければ入力させる
            if(!text){
                message.channel.send('何を検索しますか？ やめる/quit')
                const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30000 })
                const text = collected.first()
                if(text === 'quit'){return}
            }
            const yts = require('yt-search')
            yts(text, function (err, r) {
                const videos = r.videos
                message.channel.send(videos[ 0 ].url )
            })
        }
        if (command === 'roulet') {
            message.channel.send('入力した数の要素を持つルーレットを作成します  やめる/quit')
            const filter = msg => msg.author.id === message.author.id
            //30秒でタイムアウト 要素数の入力
            const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30000 })
            const rouletNum = collected.first()
            message.delete()
            if (!rouletNum) return message.channel.send('タイムアウト')
            if (isNaN(parseInt(rouletNum))) {
                message.channel.send('不正な入力を検知したのでやめます')
                return
            }
            //指定した数の要素を入力
            const rouletArray = [];
            for (let index = 0; index < rouletNum.content; index++) {
                const order = await message.channel.send(index+1+'/'+rouletNum.content+'の要素を入力してください')
                const element = await message.channel.awaitMessages({ filter, max: 1, time: 30000 })
                const responce = element.first()
                if (!responce) return message.channel.send('タイムアウト')
                if (responce.content === 'quit') {
                    message.channel.send('やっぱやめました')
                    return
                }
                rouletArray.push(responce.content)
                order.delete()
            }
            const start = await message.channel.send('回す/start  やめる/quit')
            const res = await message.channel.awaitMessages({ filter, max: 1, time: 30000 })
            const responce = res.first()
            if (!responce) return message.channel.send('タイムアウト')
            start.delete()
            //5秒後に結果を表示
            if(responce.content === 'start'){
                let random = Math.floor(Math.random() * rouletArray.length);
                let result = rouletArray[random];
                message.channel.sendTyping();
                setTimeout(() => {
                    message.channel.send(result + ' が選ばれました！！')
                }, 5000)
            } else if(responce.content === 'quit'){
                message.channel.send('やっぱやめました')
            } else {
                message.channel.send('不正な入力を検知したのでやめます')
            }
        }
    })
}

module.exports = command;