const express = require("express");

const app = express();

app.use(express.json()); 


const notesData = [];
app.post("/notes", (req, res) => {
    const body = req.body;
    const { title, description } = body
    const note = { title, description };
    notesData.push(note)
    console.log("Hello", body)
    return res.json({
        "status": 200,
        "data": notesData
    })
})

app.delete("/notes", (req, res) => {
    const { title, description } = req.body;
    console.log(req.body)
    return res.send("deleted")
})

app.get("/notes", (req, res) => {
    res.send("ok")
})















app.listen("4000", () => {
    console.log("Server is on port: 4000")
})