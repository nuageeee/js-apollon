const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("emit")
    .setDescription("Emit any event you want.")
    .addSubcommand(subcommand =>
      subcommand
        .setName("guildcreate")
        .setDescription("Emit GuildCreate event"))
    .addSubcommand(subcommand =>
      subcommand
        .setName("guilddelete")
        .setDescription("Emit GuildDelete event"))
    .addSubcommand(subcommand =>
      subcommand
        .setName("voicestateupdate")
        .setDescription("Emit VoiceStateUpdate event")
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand()

    if (subcommand === 'guildcreate') {
      interaction.client.emit("GuildCreate", interaction.guildId);
      await interaction.reply({ content: `Emitted event: GuildCreate ${interaction.guild}` });
    } else if (subcommand === 'guilddelete') {
      interaction.client.emit("GuildDelete");
      await interaction.reply({ content: "Emitted event : GuildDelete" })
    } else if (subcommand === 'voicestateupdate')  {
      console.log(`INFO - voiceStateUpdate emulated.`)
    }
  },
};