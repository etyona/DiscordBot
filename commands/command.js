//コマンド名一覧 !help で使用
cmdArray = ['github', 'roulet', 'yts 検索内容'];

//コマンドメイン処理
const prefix = '!'
function command(client) {
    client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return
        const [command, ...args] = message.content.slice(prefix.length).split(' ')
        //!help 
        if (command === 'help') {
            message.channel.send('現在使用可能なコマンド')
            cmdArray.forEach(cmdName => {
                message.channel.send('!'+cmdName+'\n')
            }); 
            return
        }
        if (command === 'github') {
            message.channel.send('https://github.com/etyona/DiscordBot')
        }
        if (command === 'add') {
            const [a, b] = args.map(str => Number(str))
            message.channel.send(`${a} + ${b} = ${a + b}`)
        }
        //!yts 引数 
        //Youtube検索　検索結果のトップ動画のURLと視聴回数、登録者を表示
        if (command === 'yts'){
            const [text] = args
            message.channel.sendTyping()
            if(!text){
                message.channel.send('引数がありません')
                return
            }
            const yts = require('yt-search')
            //検索内容によってチャンネル情報が取得できないため、2回検索を行う
            yts(text, function (err, r) {
                const video = r.videos[0]
                const channelName = r.videos[0].author.name //動画のチャンネル名
                console.log(channelName)
                //動画のチャンネル名で検索、チャンネル情報を取得
                yts(channelName, function (err, c){
                    if(!c){
                        message.channel.send(video.url)
                        message.channel.send('チャンネル情報が取得できませんでした')
                        return  //チャンネル情報の取得に失敗した場合
                    }
                    const views = new Intl.NumberFormat("ja-JP",{ notation: "compact"}).format(BigInt(video.views))
                    const subCount = new Intl.NumberFormat("ja-JP",{ notation: "compact"}).format(BigInt(c.channels[0].subCount))
                    message.channel.send(video.url)
                    message.channel.send(views+' 回視聴')
                    message.channel.send(channelName + ' / '+'登録者 '+subCount)
                })
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
                const response = element.first()
                if (!response) return message.channel.send('タイムアウト')
                if (response.content === 'quit') {
                    message.channel.send('やっぱやめました')
                    return
                }
                rouletArray.push(response.content)
                order.delete()
            }
            const start = await message.channel.send('回す/start  やめる/quit')
            const res = await message.channel.awaitMessages({ filter, max: 1, time: 30000 })
            const response = res.first()
            if (!response) return message.channel.send('タイムアウト')
            start.delete()
            //5秒後に結果を表示
            if(response.content === 'start'){
                let random = Math.floor(Math.random() * rouletArray.length);
                let result = rouletArray[random];
                message.channel.sendTyping();
                setTimeout(() => {
                    message.channel.send(result + ' が選ばれました！！')
                }, 5000)
            } else if(response.content === 'quit'){
                message.channel.send('やっぱやめました')
            } else {
                message.channel.send('不正な入力を検知したのでやめます')
            }
        }
    })
}

module.exports = command;