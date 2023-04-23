const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")
        .setFooter( ayarlar.bot_name, client.user.avatarURL())
        .setAuthor('Abone Sistemi', 'https://cdn.discordapp.com/attachments/875119709002023004/902569874080018432/narcos_beta_logo.png')
       
        .setDescription(`
       
       ╔═══════╣Narcos Beta╠══════════
       ║
       ${client.commands
       
         .filter(cmds => cmds.kategori == "abone")
       
         .map(komut => `║  **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       ║
       ╚══════════════════════════`)
       .setImage(ayarlar.banner)
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "aboneyardım",
description: "Abone komutlarına bakarsın",
aliases: [],
kategori: "yardım",
usage: "",
}