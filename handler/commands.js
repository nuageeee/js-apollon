// const { PermissionsBitField } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const fs = require('node:fs');
const path = require('node:path')

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

module.exports = (client) => {
    const CommandList = [];
    fs.readdirSync('./src/commands').forEach(async dir => {
        const commandsPathDir = path.join(__dirname, `../src/commands/${dir}`);
        const commandsFiles = fs.readdirSync(commandsPathDir).filter((file) => file.endsWith(".js"));

        for (const file of commandsFiles) {
            const filePath = path.join(commandsPathDir, file);
            const command = require(filePath);
            if ('data' in command && 'execute' in command) {
                CommandList.push(command.data.toJSON());
                client.commands.set(command.data.name, command)
                console.info(`Client - Succesfully loaded ${command.data.name} commands!`)
            } else {
                console.error(`Error - Commands ${filePath} miss a required "data" or "execute" property.`)
            }
        }
    });

    (async () => {
        try {
            await rest.put( //process.env.GUILD_ID ?
                // Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID) :
                Routes.applicationCommands(process.env.BOT_ID),
                { body: CommandList }

            );
            console.log(`Client - Application (/) commands registered : lenght ${CommandList.length}`);
        } catch (e) {
            console.log(`Client - Failed to register application (/) commands`, e);
        }
    })();
}