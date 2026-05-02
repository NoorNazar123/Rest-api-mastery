const express = require("express");

const app = express();

app.use(express.json()); 


const notesData = [];
app.post("/notes", (req, res) => {
    const body = req.body;
    const { title, description } = body
    const note = { id: Date.now(), title, description };
    notesData.push(note)
    console.log("Hello", body)
    return res.json({
        "status": 200,
        "data": notesData
    })
})

app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    console.log("Delete ID:", id);

    const index = notesData.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const deletedNote = notesData.splice(index, 1);

    return res.json({
        message: "Note deleted successfully",
        delData: deletedNote[0],
        allNotes: notesData
    });
});

app.patch("/notes", (req, res) => {
    const { title } = req.body;
    const index = notesData.find(note => note.title == title)
    notesData.splice(index, 1)
    console.log("index123:", index)
    return res.json({
        "data": notesData
    })
})

app.get("/notes", (req, res) => {
    res.json({
        "data": notesData,
    })
})















app.listen("4000", () => {
    console.log("Server is on port: 4000")
})