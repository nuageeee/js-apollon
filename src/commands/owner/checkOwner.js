const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checkowner')
        .setDescription('Check if you are in the Owner list'),
    async execute(interaction) {
        if(interaction.member.id === process.env.ownerId) {
            interaction.reply({ content: `Owner Success - You are an Owner.`})
        } else {
            interaction.reply({ content: `Owner Error - You are not an Owner.`})
        }
    }
}