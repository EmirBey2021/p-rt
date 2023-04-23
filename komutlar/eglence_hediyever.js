const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        const nhediyeci = message.mentions.users.first() 
        if (!nhediyeci) return message.channel.send("Kime Hediye Alıyoruz?")
        
         
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${nhediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
        .setColor("RANDOM")
        .setTimestamp()
        .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")


        message.reply({embeds: [embed]})
        
},

name: "hediye-ver",
description: "İstediğin kişiye hediye verirsin",
aliases: [],
kategori: "eglence",
usage: "hediye-vert",
}