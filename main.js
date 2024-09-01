require('dotenv').config();
const fs = require("node:fs");
const { Client, Collection, Partials, GatewayIntentBits } = require("discord.js");
const { connection } = require('./data/databases/connection');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ]
});

client.commands = new Collection();
client.embeds = require('./data/config/embeds')
client.e = require('./data/config/emotes')
client.c = require('./data/config/color')
client.sql = connection;

module.exports = client;

fs.readdirSync('./handler').forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);