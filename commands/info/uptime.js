const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const moment = require("moment");
require("moment-duration-format");


module.exports = {
    name: "uptime",
    aliases: ["uptime", "up", "lifespan", "lifetime"],
    category: "info",
    description: "Checks Reg's Uptime",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        //do func
        const embed = new MessageEmbed()
        .setThumbnail("https://duce5lj2f2sxj.cloudfront.net/icon/premium/png-64/520439.png?Expires=1618099200&Signature=P07e3fPLg8Wufs7Do6WasssByBIBnX~W~Diazc~87G2Wq4qRbUGABr9vKMnap608qrIF5pmkaaCsCFxpk9-pX20AWdlvO59WV6GeabBDCJAwHWwncFBUkciFMDiNx~4M1MmOPFgNWUkYbbbPADUljV516IP0TPhIHzhkhQzrPGrKlSSNZEJHcltfTBWWJUoKHpQNuTqV~JcMR-cSGEXM6INuX5EdBeAvVRJ35fxqQbEn6ZUw9G-5zi6CgospBvgoCDvFr~Ot7ssvtJ5YpVnyFCRyzLaGvTnGjCXzNTKY0CBwSTaOmrerlAPOjFjzmwnPVt8I97m7RoGlu~qXy71ZlQ__&Key-Pair-Id=APKAIONEDRCDZGBCR6PA")
        .addField("Up Time", duration, true)
        .setFooter("Reg The ...")
        .setAuthor("Reg", "https://cdn.discordapp.com/app-icons/829786183105773599/ed820bad0b89f220bc3f49f743f65ee1.png", "https://github.com/0xWarning/Reg")
        

    message.channel.send(embed);
    }
}
