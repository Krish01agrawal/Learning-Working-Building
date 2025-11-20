import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World express");
// });

app.use(express.static('dist'));

app.get("/api/v1/jokes", (req, res) =>{
    const jokes = [
        {
            id: 1,
            joke: "What do you call a fish with no eyes? A fsh."
        },
        {
            id: 2,
            joke: "What do you call a fish with no eyes? A fsh."
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;