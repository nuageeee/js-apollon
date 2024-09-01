const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reaction")
        .setDescription("Check Reaction Role"),

    async execute(interaction) {
        const message = await interaction.reply({ content: "Reacting Role Test", fetchReply: true });
        message.react('👍');

        const collectorFilter = (reaction, user) => {
            return reaction.emoji.name === '👍' && user.id === message.author.id
        };
    }
}