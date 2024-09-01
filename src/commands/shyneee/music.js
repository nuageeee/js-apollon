const { joinVoiceChannel } = require("@discordjs/voice");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joinvoice')
        .setDescription('test voice channel join'),
    async execute(interaction) {
        const connection = joinVoiceChannel({
            channelId: '1194389149210386451',
            guildId: '1194389148186984459',
            adapterCreator: channel.guild.voiceAdapaterCreator,
        })
    }
}