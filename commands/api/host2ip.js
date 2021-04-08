const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const Config = require('./config.json');
const apiKey = Config.apikey;

module.exports = {
  name: "host2ip",
  category: "api",
  description: "Resolves the host's IP",

  run: async (client, message, args) => {

  snekfetch.get(`http://${apiSite}/host2ip?key=${apiKey}&output=html&host=${args}`).then(r => {

    const embed = new MessageEmbed()

    info = `${r.body}`;
        embed.setFooter(`0xResolver`);

    return message.channel.send(embed.setColor("GREEN").setDescription(info));

  });
}
}
