import express from "express";
import cors from "cors";
import { main_router } from "./router/main.route.js";

const app = express();

app.use(cors());
app.use(
  express.json({
    extended: true,
  })
);
app.use("/api", main_router);

app.listen(3553, () => {
  console.log("Server started on port 3553");
});
