const { Events, EmbedBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
const { connection } = require('../../data/databases/connection');
const os = require("os");

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setPresence({
      activities: [{ name: "dev bot" }],
      status: "idle",
    });

    const bootup = client.channels.cache.get('1271289706025582635')
    const bootupEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle("Bootup embed")
      .addFields(
        { name: "Bot ID: ", value: `${client.user.id}`, inline: true},
        { name: "Bot tag: ", value: `${client.user.tag}`, inline: true},
        { name: '\u200b', value: '\u200b'},
        { name: "Servers: ", value: `${client.guilds.cache.size.toLocaleString()} servers`, inline: true},
        { name: "Commands: ", value: `${client.commands.size} commands`, inline: true},
        { name: '\u200b', value: '\u200b'},
        { name: "Platform: ", value: `${os.platform}`, inline: true},
        { name: "CPU: ", value: `${os.cpus()[0].model.split('CPU')[0]}${os.cpus().length} Cores ${os.cpus()[0].model.split('CPU ')[1]}`, inline: true}
      )

    bootup.send({ embeds: [bootupEmbed] })
  },
};