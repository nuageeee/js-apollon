const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { execute } = require("./emit");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('restart')
    .setDescription('restart bot.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        try {
            interaction.reply("Restartin...").then(msg => msg.delete({ timeout: 300}))
                .then(() => client.destroy())
                .then(() => client.login(process.env.BOT_TOKEN))
                .then(() => msg.channel.send('Restart successful'))
        } catch(e) {
            console.log(e)
        }
    }
}