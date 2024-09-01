const { SlashCommandBuilder } = require("discord.js");
const { execute } = require("./nickname");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shardchecker')
        .setDescription('Check the shard information'),
    
    async execute(interaction, client) {
        return interaction.reply(`Server count: ${client.guilds.cache.size}`)
    }
}