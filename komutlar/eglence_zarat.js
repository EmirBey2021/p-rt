const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        function narcoscode() {
            var rand = ['1', '2', '3', '4', '5', '6'];
    
            return rand[Math.floor(Math.random()*rand.length)];
        }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('🎲 Zarın: ' + narcoscode())
        message.reply({embeds: [embed]})
},

name: "zar-at",
description: "Zar atarsın",
aliases: [],
kategori: "eglence",
usage: "zar-at",
}