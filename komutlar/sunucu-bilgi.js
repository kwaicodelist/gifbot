const Discord = require('discord.js');

exports.run = (client, message) => {

let sunucu = new Discord.MessageEmbed()

.setThumbnail(message.guild.iconURL)

.setColor("BLACK")

.setTitle("\n\nSunucu İstatistik")

.addField('Sunucu İd :', message.guild.id)
.addField('Sunucu Sahibi :', message.guild.owner, true)
.addField('Sunucu Bölgesi :', message.guild.region)
.addField('Afk Kanalı :', `${message.guild.afkChannel}`, true)
.addField('Üye Sayısı :', message.guild.memberCount)
.addField('Kanal Sayısı :', message.guild.channels.size, true)
.addField('Rol Sayısı :', message.guild.roles.size)

return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["sunucu-bilgi","sb","s-b"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
name: 'sunucubilgi',
description: 'lrowsxrd',
usage: 'sunucubilgi'
};