const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '436918120184021012') return;

if (message.content.startsWith(prefix + '1')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + '2')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + '3')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark: : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + '4')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MrBloods#2729");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
    }
    });	

  
client.login('NDM2OTE4MTIwMTg0MDIxMDEy.XRi2Yw.TeZGsmr1n9BMDhf6NvrkO-grNxw');
