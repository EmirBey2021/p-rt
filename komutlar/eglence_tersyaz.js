const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        if (args.length < 1) {
            return message.reply('doğru kullanım '+ayarlar.prefix+'ters-yaz <yazı>')
          }
          await message.reply(args.join(' ').split('').reverse().join(''));
},

name: "ters-yaz",
description: "Yazıyı tersten yazdırrısın",
aliases: [],
kategori: "eglence",
usage: "ters-yaz",
}