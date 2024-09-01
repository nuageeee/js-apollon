const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Help panel'),
    showHelp: false,
    execute(client, interaction) {
        const commands = client.guild.commands.fetch()
            .then(command => {
                console.log(client)
                console.log(`Fetched command ${command.size}`)
            })
    }
}