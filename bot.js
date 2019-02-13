const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544190065954390026")
setInterval(function() {
channel.send(`i need fucking credit to buy somethink to your sister and your mam mother brother ارحب ولله حياك الله في سيرفر بلاك سكاي للنيك والفري مايك والشطبطة للبنات هاف فن`);
}, 30)
})

client.login(process.env.BOT_TOKEN);