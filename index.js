
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("BDF Lab 4 - Registration, Login and JWT Authentication Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
