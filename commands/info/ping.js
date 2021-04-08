module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Pinging....`);

        msg.edit(`Pong! | Latency : ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms | API Latency : ${Math.round(client.ping)}ms`);
    }
}
