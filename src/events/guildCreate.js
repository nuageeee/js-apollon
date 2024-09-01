const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildCreate,
    once: true,
    async execute(guild, client) {
        console.log(guild.name)
    }
}