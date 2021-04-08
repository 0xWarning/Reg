const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const Config = require('./config.json');
const apiKey = Config.apikey;

module.exports = {
  name: "ip2host",
  category: "api",
  description: "Resolves the IP's host",

  run: async (client, message, args) => {

  snekfetch.get(`http://${apiSite}/ip2host?key=${apiKey}&output=html&host=${args}`).then(r => {

    const embed = new MessageEmbed()

    info = `${r.body}`;
        embed.setFooter(`0xResolver`);

    return message.channel.send(embed.setColor("GREEN").setDescription(info));

  });
}
}
