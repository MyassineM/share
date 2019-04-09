const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
     اذا تحبني وتحب كل ناس اقبل هديتي
وادخل ذا السيرفر عشان
في قيف اوايات افوز فيها
ونظام ريورد اصير غنية بيه 
اصير اطنخ وحدة بالعالم
بس لما تساعدني بليز ادخل
ساعدني

                                 [  https://discord.gg/enEdKV ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
     اذا تحبني وتحب كل ناس اقبل هديتي
وادخل ذا السيرفر عشان
في قيف اوايات افوز فيها
ونظام ريورد اصير غنية بيه 
اصير اطنخ وحدة بالعالم
بس لما تساعدني بليز ادخل
ساعدني

                                  [  https://discord.gg/enEdKV ] **`)
}).catch(console.error)      
})
client.login('NTYwMDYxODkxMDc5MDQ1MTMx.XKcqLA.Wv1WWtV9HTCc8tQjJlnNsH9Jr00');
