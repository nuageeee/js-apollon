const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nickname")
        .setDescription("Change nickname of the bot")
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Set the new name.')
                .addStringOption(option =>
                    option.setName('nick').setDescription('The new nickname of the bot'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reset')
                .setDescription('Reset the name of the bot.')
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

    async execute(client, interaction) {
        if (interaction.options.getSubcommand() === 'set') {
            const nick = interaction.options.getString('nick') ?? null;
            console.log(nick)
            // await client.user.setNickname(pseudo)
        } else if (interaction.options.getSubcommand() === 'reset') {
            console.log(`Set the name to Apollon`)
        }
    }
}