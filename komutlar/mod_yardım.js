const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")
        .setThumbnail(`${ayarlar.logo}`)
        .setFooter( ayarlar.bot_name, client.user.avatarURL())
        .setAuthor('Moderasyon Sistemi', `${ayarlar.logo}`)
       
        .setDescription(`
       
       ╔═══════╣${ayarlar.bot_name}╠══════════
       ║
       ${client.commands
       
         .filter(cmds => cmds.kategori == "moderasyon")
       
         .map(komut => `║ **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       ║
       ║
       ╚══════════════════════════`)
       .setImage(ayarlar.banner)
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "mod-yardim",
description: "Moderasyon Komutlarına Bakarsın",
aliases: ["mod-yardım"],
kategori: "yardım",
usage: "",
}