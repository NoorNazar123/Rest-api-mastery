const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("DB connection failed!", error.message);
  }
}
main();

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteDb = mongoose.model("Note", noteSchema);

class FormatResponse {
  static message(code = 200, message = "successful", data = null) {
    return { statusCode: code, message, data };
  }

  static error(code = 500, message = "Fail request!") {
    return { statusCode: code, message };
  }
}

/* CREATE */
app.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json(FormatResponse.error(400, "Title and description required"));
    }

    const savedNote = await noteDb.create({ title, description });

    res
      .status(201)
      .json(FormatResponse.message(201, "Added", savedNote));
  } catch (error) {
    res.status(500).json(FormatResponse.error(500, error.message));
  }
});

/* READ */
app.get("/notes", async (req, res) => {
  try {
    const notes = await noteDb.find();
    res.json(FormatResponse.message(200, "All notes", notes));
  } catch (error) {
    res.status(500).json(FormatResponse.error(500, error.message));
  }
});

/* DELETE */
app.delete("/notes/:id", async (req, res) => {
  try {
    const deleted = await noteDb.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res
        .status(404)
        .json(FormatResponse.error(404, "Note not found"));
    }

    res.json(FormatResponse.message(200, "Deleted", deleted));
  } catch (error) {
    res.status(500).json(FormatResponse.error(500, error.message));
  }
});

/* UPDATE */
app.patch("/notes/:id", async (req, res) => {
  try {
    const updatedNote = await noteDb.findByIdAndUpdate(
      req.params.id,
      req.body, // simple (no overthinking)
      { new: true }
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json(FormatResponse.error(404, "Note not found"));
    }

    res.json(
      FormatResponse.message(200, "Updated", updatedNote)
    );
  } catch (error) {
    res.status(500).json(FormatResponse.error(500, error.message));
  }
});

/* SERVER */
app.listen(4000, () => {
  console.log("Server running on port 4000");
});