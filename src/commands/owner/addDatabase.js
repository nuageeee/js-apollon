const { SlashCommandBuilder } = require("discord.js");
const { connection } = require("../../../data/databases/connection");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adb')
        .setDescription('add discord to database'),

    async execute(interaction) {
        if(interaction.member.id === process.env.ownerId) {
           connection.query(`INSERT INTO server_info (name, id, autoban, autokick) VALUES ('${interaction.guild}', '${interaction.guildId}', 'false', 'false')`, function(err, rows){
            if (err) {
                console.log(err)
            }
            console.log(rows)
            return interaction.reply({ content: `Data logged! ${rows}` })
           })
        } else {
            interaction.reply({ content: "OWNER Error - You don't have permissions to do this", ephemeral: true})
        }
    }
}