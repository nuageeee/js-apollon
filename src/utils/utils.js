const { ActionRowBuilder, ButtonBuilder } = require("@discordjs/builders")

class Utils {
    static button(Style, Label, Emoji, id, Disabled) {
        let button = [];

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId(id)
                .setLabel(Label ? ' ' : ' ')
                .setStyle(Style)
                .setEmoji(Emoji)
                .setDisabled(Disabled)
        );
        return row;
    }
}

module.exports = { Utils };