const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("Allow admin to publish the list of active GitHub repo")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute(interaction) {
    const reset_cli = new ButtonBuilder()
      .setLabel("reset-cli")
      .setURL("https://github.com/nuageeee/reset-cli-linux")
      .setStyle(ButtonStyle.Link);

    const djs_boilerplate = new ButtonBuilder()
      .setLabel("djs-template bot")
      .setURL("https://discord.js.org")
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder().addComponents(
      reset_cli,
      djs_boilerplate
    );

    const githublink = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("GitHub active repo")
      .addFields([
        {
          name: "reset-cli",
          value: "A powerful tool for Linux.",
          inline: true,
        },
        {
            name: "djs-boilerplate",
            value: 'A simple djs V14 handler template',
        }
      ]);

    interaction.reply({
      embeds: [githublink],
      components: [row],
    });
    
  },
};