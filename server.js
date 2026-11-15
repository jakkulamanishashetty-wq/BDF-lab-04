
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            name TEXT,
            password TEXT
        )
    `, (err) => {
        if (err) {
            console.error("Table creation error:", err.message);
        } else {
            console.log("Users table created successfully");
        }
    });
});

module.exports = db;
