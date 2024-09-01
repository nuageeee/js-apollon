const { createConnection } = require('mysql2');

const connection = createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'apollon_db',
    password: ''
})

connection.connect((err) => {
    if (err) {
        console.log(`MySQL Error - ${err}`)
    } else {
        console.log(`MySQL Success - Connected to ${connection.config.database}`)
    }
})

module.exports = { connection };