const { readdirSync } = require("fs");
const colors = require('colors');

const ascii = require("ascii-table");

// Vars

const xAPI = "[".white +"Reg".rainbow + "]".white + " ";
const errorStr = "[".white +"Error".red + "]".white + " ";
const loadedStr = "[".white +"Loaded".green + "]".white + " ";

module.exports = (client) => {
    // Read every commands subfolder
    //console.clear();
    console.log(xAPI + 'Checking Commands'.yellow);
    readdirSync("./commands/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                //table.addRow(file, ' | ✅');
                console.log(loadedStr + file);
            } else {
                //table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                console.log(errorStr + file + ' missing a help.name, or help.name is not a string.');
                continue;
            }
    
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
}

/**
 * This is the basic command layout
 * module.exports = {
 *  name: "Command name",
 *  aliases: ["array", "of", "aliases"]
 *  category: "Category name",
 *  description: "Command description"
 *  usage: "[args input]",
 *  run: (client, message, args) => {
 *      The code in here to execute
 *  }
 * }
 */