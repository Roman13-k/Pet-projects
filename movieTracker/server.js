import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

let prevWatched = [];

app.use(express.json());

app.get("/prevWatched", (req, res) => {
  res.json(prevWatched);
});

app.post("/prevWatched", async (req, res) => {
  const { id, movie } = req.body;

  const existingIndex = prevWatched.findIndex((item) => item.id === String(id));

  if (existingIndex !== -1) {
    prevWatched.splice(existingIndex, 1);
  } else if (prevWatched.length >= 20) {
    prevWatched.pop();
  }

  prevWatched.unshift({ id: String(id), movie });

  try {
    await axios.put("http://localhost:3000/prevWatched", prevWatched);
    res.json(prevWatched);
  } catch (error) {
    console.error("Error while updating prevWatched:", error);
    res.status(500).send("Failed to update prevWatched");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
