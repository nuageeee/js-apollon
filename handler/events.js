const path = require("path");
const fs = require('fs')
module.exports = (client) => {
    const eventPath = path.join(__dirname, "../src/events")
    const eventFiles = fs
        .readdirSync(eventPath)
        .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
        const filePath = path.join(eventPath, file);
        const event = require(filePath);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
            console.log(`Client - Events loaded once : ${event.name}`);
        } else if (!event.once) {
            client.on(event.name, (...args) => event.execute(...args));
            console.log(`Client - Events loaded : ${event.name}`);
        } else {
            console.error(`Client - Events not loaded : ${event.name}`)
        }
    }
}