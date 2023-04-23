const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")
        .setThumbnail(`${ayarlar.logo}`)
        .setFooter( ayarlar.bot_name, client.user.avatarURL())
        .setAuthor('BotMaker Sistemi', `${ayarlar.logo}`)
       
        .setDescription(`
       
       ╔═══════╣${ayarlar.bot_name}╠══════════
       ║
       ${client.commands
       
         .filter(cmds => cmds.kategori == "yardım")
       
         .map(komut => `║ **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       ║
       ║
       ╚══════════════════════════`)
       .setImage(ayarlar.banner)
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "yardim",
description: "Yardım Komudu",
aliases: ["yardım"],
kategori: "",
usage: "",
}