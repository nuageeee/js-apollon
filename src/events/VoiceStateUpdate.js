const { Events, ChannelType } = require("discord.js");

module.exports = {
    name: Events.VoiceStateUpdate,
    async execute(oldState, newState, guild) {
        console.log(`oldState : ${oldState.channelId}\nnewState : ${newState.channelId}`)
        if (newState.channelId === '1272840447190106133') {
            const channel = newState.guild.channels.create({
                name: `${newState.member.user.username}`,
                type: ChannelType.GuildVoice,
            }).then(channel => {
                channel.setParent('1194389149210386450')
                console.info(`INFO - Channel ${channel.name} created with success.`)
                newState.member.voice.setChannel(channel.id)
            })
        }
    }
}