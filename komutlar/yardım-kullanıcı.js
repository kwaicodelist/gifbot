const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
    
.setColor('BLACK')
.addField(`:white_check_mark: Kullanıcı Komutları :white_check_mark:`,
`LROWSXRD GIF BOT V12 ALTYAPI
-**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
-**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
-**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
-**ping** Botun Pingini Gösterir!
-**istatistik** Botun İstatistiğini Gösterir!

:white_check_mark: **Dikkat** :white_check_mark: 

:white_check_mark: **Linkler** :white_check_mark:

[Botun Destek Sunucusuna Gitmek İçin Tıkla](BOTUNUZUN DAVET LİNKİ)    
[Botu Eklemek İçin Tıkla](BOTUNUZUN DAVET LİNKİ)`)
    
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Darknes Code',
  usage: 'kullanıcı'
};