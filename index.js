// Require
const fs = require('fs');
const { Client, Collection} = require('discord.js');
const Config = require('./includes/config.json');
const colors = require('colors');
const { Console } = require('console');

console.log('Booting...');
// console.log(`
// ██▀███  ▓█████   ▄████ 
// ▓██ ▒ ██▒▓█   ▀  ██▒ ▀█▒
// ▓██ ░▄█ ▒▒███   ▒██░▄▄▄░
// ▒██▀▀█▄  ▒▓█  ▄ ░▓█  ██▓
// ░██▓ ▒██▒░▒████▒░▒▓███▀▒
// ░ ▒▓ ░▒▓░░░ ▒░ ░ ░▒   ▒ 
//   ░▒ ░ ▒░ ░ ░  ░  ░   ░ 
//   ░░   ░    ░   ░ ░   ░ 
//    ░        ░  ░      ░ 
//       Im Only Human
//    `);


const cuiBot = "[".white +"Bot".cyan + "]".white + " ";
const banHum = "[".white +"Human".zebra + "]".white + " ";
const banBot = "[".white +"Bot".cyan + "]".white + " ";
const banStaff = "[".white +"STAFF".yellow + "]".white + " ";


console.log(`
        W                             
       WWW          
       WWW          
      WWWWW         
W     WWWWW     W   
WWW   WWWWW   WWW   
 WWW  WWWWW  WWW    
  WWW  WWW  WWW     
   WWW WWW WWW      
     WWWWWWW        
  WWWW  |  WWWW     
        |           
        |
        `.rainbow);
console.log(`
    ╦═╗┌─┐┌─┐
    ╠╦╝├┤ │ ┬
    ╩╚═└─┘└─┘
`.green);
console.log(`----------------`.gray);
console.log("     " + banStaff);
console.log("     "+ banHum);
console.log("      "+ banBot);
console.log(`----------------`.gray);
console.log(``);

                        



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

// Args for debug
var rMode = "";
var myArgs = process.argv.slice(2);
//console.log('[BOT]] Bot module type ', myArgs);

switch (myArgs[0]) {
    case 'debug':
        rMode = 'debug';
        console.log(cuiBot + ` Reg is now in DEBUG mode`);
        break;
    case 'deployment':
        rMode = 'deployment';
        console.log(cuiBot + `[Bot] Reg is now in DEPLOYMENT mode`);
        break;
    default:
        console.log(cuiBot + `[Bot] Report To Developer #4354235`);
        
    }

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
    {
        if(rMode == "debug")
        {
            console.log(`[Client] ${message.member.displayName} [Command] ${message.content.replace(args, '').replace(Config.prefix, '')}`);
            console.log(cuiBot +` Command Ran [InputCMD] ${message.content.replace(args, '').replace(Config.prefix, '')}`);
            command.run(client, message, args);
        }
        else
        {
            console.log(`[Client] ${message.member.displayName} [Command] ${message.content.replace(args, '').replace(Config.prefix, '')}`);
            command.run(client, message, args);
        }
    }
});

client.login(Token);