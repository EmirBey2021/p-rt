const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args) => {

    if(message.author.id !== message.guild.ownerId) return message.reply(`Bu komudu kullanmak için yetkin yok`)
		const menu = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle(ayarlar.bot_name+" Botlist Sistemi")
		.setDescription(`
		Bot Ekletme Başvurusu İçin Aşağıdaki Butona Basınız.`)

		const row = new MessageActionRow()
		.addComponents(
		new MessageButton()
		.setCustomId('bot-başvuru')
		.setLabel('Bot Ekletmek İçin Tıkla')
		.setEmoji("🤖")
		.setStyle('SECONDARY'),
		
		);
		message.channel.send({
			embeds: [menu], components: [row]
		});


},

name: "botlist",
description: "Botlist menüsünü çağırırsın",
aliases: [],
kategori: "yardım",
usage: "botlist",
}