const { SlashCommandBuilder } = require("discord.js");
const { connection } = require("../../../data/databases/connection");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Check database content'),

    async execute(interaction) {
        connection.query(`SELECT * FROM server_info WHERE id = ${interaction.guild.id}`, function (err, rows) {
            if (err) {
                console.log(err);
            }
            console.log(rows)
            return interaction.reply({ content: `Data logged!` })
        })
    }
}