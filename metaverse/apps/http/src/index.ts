import express from "express";
import { router } from "./routes/v1";

const app = express();
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000);
