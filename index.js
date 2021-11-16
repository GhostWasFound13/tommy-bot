const aoi = require('aoi.js')

const bot = new aoi.Bot({
  token: process.env.token,
  prefix: "a!",
  intents: "all", 
})
bot.status({
text: "$djseval[client.users.cache.size;yes] hello| $djseval[client.guilds.cache.size;yes] hi there)",
type: "WATCHING",
time: 12,
status: "idle"
})
bot.status({
text: "v5 testing",
type: "PLAYING",
time: 12,
status: "idle"
})
bot.onJoin()
bot.onMessage()
bot.onInteractionCreate()
bot.readyCommand({
  channel: "891561794357837864",
  code: `$log[logging in to the bot success login $usertag[$clientid]]`
})

const load = new aoi.LoadCommands(bot)

load.load(bot.cmd, "./commands/")

const express = require('express')
const app = express();

app.get("/", async(req,res) => {
  res.send('lol no need node 16.6.0')
})

app.listen(3000, async () => {
  console.log('bot on')
})

//Music Commands
 
bot.command({
 name: "play",
 aliases: ['p'],
 code: `**playing the $playSong[$message;24h;yes;yes;yes]`
})
 
bot.command({
name: "pause",
code: `$pauseSong
**⏸️ Paused**
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
})
 
bot.command({
name: "resume",
code: `$resumeSong
**▶️ Resumed**
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
})
 
bot.command({
name: "loop",
code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop now **on**];false;Loop now **off**]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
})
 
bot.command({
name: "nowplaying",
aliases: "np",
code: `$author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[$songInfo[title]]
$description[$addField[Duration;$songInfo[duration]]
$addField[URL;$songInfo[url]]]
$footer[$botPingms to load it.]
$thumbnail[$songInfo[thumbnail]]
$color[a09fff]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
})
 
bot.command({
name: "stop",
code: `$stopSong
$sendMessage[⏹️ Stopped.;no]
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$deleteIn[5s]`
})
 
 
bot.command({
name: "skip",
code: `$skipSong
⏩ Skipped!
$onlyIf[$queueLength>1;Only have **$queueLength song**]
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
})
 
 
bot.command({
name: "clearqueue",
code: `$clearSongQueue
$stopSong
$editIn[125ms;✅ Cleared queue. from **$queueLength song** to **0**] ⚠️ Clearing...
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]`
})
 
bot.command({
name: "queue",
code: `$queue[1;30]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
})
 
bot.command({
name: "volume", 
code: `$volume[$message[1]]
$onlyIf[$message[1]<101;**⛔ Max volume 100%**]
$onlyIf[$charCount[$message[1]]<4;Failed.]
$onlyIf[$isNumber[$message[1]]==true;Must number!]
$onlyIf[$message[1]!=;**⛔ Volume can change 0 - 100**]
$editIn[1s;**✅ Changed to $message[1]%**] **Changing..**
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
})

//leaf
//---------------------------------------------------------------------------------------------------------------------------------------
//AOI.JS USER INFO MADE BY (VALI)

bot.command({
    name: "whois",
    aliases: ['i', 'userinfo', 'user'],
    code: `
    $onlyIf[$guildID!=;]
    $title[1;$username[$findUser[$message;yes]]'s info]
    $description[1;<@$findUser[$message;yes]>]
    $addField[1;Creation Date;$creationDate[$findUser[$message;yes]]
    (\`$creationDate[$findUser[$message;yes];time]\`)]
    $addField[1;Join Date;$memberJoinedDate[$findUser[$message;yes]]
    (\`$memberJoinedDate[$findUser[$message;yes];time]\`)]
    $addField[1;DM Status;$replaceText[$replaceText[$isUserDMEnabled[$findUser[$message;yes]];true;Open];false;Close]]
    $addField[1;Platform;$platform[$findUser[$message]]]
    $addField[1;Activity;$activity[$findUser[$message]]]
    $addField[1;Status;$status[$findUser[$message]]]
    $addField[1;ustom Status;$getCustomStatus[$findUser[$message]];state]
    $addField[1;Bot;$isBot[$findUser[$message;yes]]]
    $addField[1;ID;$findUser[$message;yes]]
    $addField[1;Discriminator;#$discriminator[$findUser[$message;yes]]]
    $addField[1;Username;$username[$findUser[$message;yes]]
    (Nickname: \`$nickname[$findUser[$message;yes]]\`)]
    $footer[1;Requested by $username[$authorID]]
    $color[1;$getRoleColor[$highestRole[$findUser[$message]]]]
    $botTyping
    `
})