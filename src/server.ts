import { createServer } from "http";
import { config } from "dotenv";
import express from "express";

config();

const PORT = process.env.PORT;

const app = express();

const server = createServer(app);

app.use(express.json());

app.use("/", (req, res) =>
  res
    .send({
      status: "UP",
    })
    .status(200)
);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
