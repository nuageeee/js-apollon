require('dotenv').config();
const { ShardingManager } = require('discord.js')

const manager = new ShardingManager('./main.js', { token: process.env.BOT_TOKEN });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();