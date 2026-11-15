
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./server");

const app = express();

app.use(express.json());

const JWT_SECRET = "my_secret_key";

// Register
app.post("/register", async (req, res) => {
    const { username, name, password } = req.body;

    if (!username || !name || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
        "INSERT INTO users (username, name, password) VALUES (?, ?, ?)",
        [username, name, hashedPassword],
        function (err) {
            if (err) {
                if (err.code === "SQLITE_CONSTRAINT") {
                    return res.status(400).json({ error: "Username already exists" });
                }
                return res.status(500).json({ error: "Database error" });
            }

            res.status(201).json({ message: "User registered successfully" });
        }
    );
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }

            if (!user) {
                return res.status(400).json({ error: "Invalid username" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ error: "Invalid password" });
            }

            const token = jwt.sign(
                { username: user.username },
                JWT_SECRET,
                { expiresIn: "1h" }
            );

            res.json({ jwt_token: token });
        }
    );
});

module.exports = app;
