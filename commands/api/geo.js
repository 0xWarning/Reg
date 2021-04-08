const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const Config = require('./config.json');
const apiKey = Config.apikey;

module.exports = {
  name: "geoip",
  category: "api",
  description: "Resolve info of the ip",

  run: async (client, message, args) => {

  snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {

    const embed = new MessageEmbed()

    info = `**IP**: ${args}\n**Country**: ${r.body.country}\n**City**: ${r.body.city}\n**Isp**: ${r.body.isp}`;
        embed.setFooter(`0xResolver`);

    return message.channel.send(embed.setColor("GREEN").setDescription(info));

  });
}
}
