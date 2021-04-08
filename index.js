// Require
const fs = require('fs');
const { Client, Collection} = require('discord.js');
const Config = require('./config.json');

const client = new Client({
    disableEveryone: true
});


// Varibles
const Prefix1 = Config.prefix;
const Token = Config.token;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// Date Finc

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// Client

client.on('ready', () => {
  console.log(``);
  console.log(`Reg Started At ${year + ":" + month + ":" + date}!`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('me being developed', { type: 'WATCHING' });
});

// Command Handler

client.on('message', async message  => {
    const prefix = Prefix1;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(Token);