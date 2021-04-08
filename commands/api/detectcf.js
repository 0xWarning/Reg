const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const Config = require('./config.json');
const apiKey = Config.apikey;
const apiSite = Config.apisite;

module.exports = {
  name: "detectcf",
  category: "api",
  description: "Checks if host is using CloudFlare",

  run: async (client, message, args) => {

  snekfetch.get(`http://${apiSite}/detectcf?key=${apiKey}&output=html&host=${args}`).then(r => {

    const embed = new MessageEmbed()

    info = `${r.body}`;
        embed.setFooter(`Reg`);

    return message.channel.send(embed.setColor("GREEN").setDescription(info));

  });
}
}
