const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Latency check for bot')
    .setDMPermission(false),
  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId('test')
      .setTitle('Ticket autre')

    const sujet = new TextInputBuilder()
      .setCustomId('sujeticket')
      .setLabel("Qu'elle est le sujet de votre demande?")
      .setMinLength(2)
      .setMaxLength(1_000)
      .setStyle(TextInputStyle.Short)

    const sujetDescription = new TextInputBuilder()
      .setCustomId('descsujetticket')
      .setLabel("Merci d'expliquer votre demande en détails.")
      .setMinLength(2)
      .setMaxLength(1_000)
      .setStyle(TextInputStyle.Paragraph)

    const sujetRow = new ActionRowBuilder().addComponents(sujet)
    const descRow = new ActionRowBuilder().addComponents(sujetDescription)
    modal.addComponents(sujetRow, descRow)
    await interaction.showModal(modal);
    if (interaction.customId === 'test') {
      await interaction.reply({ content: `Submission received successfully`})
    }
  }
};