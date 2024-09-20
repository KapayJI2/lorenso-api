import Router from "express";
import { InnerTypeCheckMiddleware } from "../middleware/inner-type-check.middleware.js";
import { GetData, WriteData } from "../utils/fileDB.util.js";

export const main_router = Router();

main_router.get("/:id?", (req, res) => {
  try {
    res.status(200).send(GetData(req.params.id));
  } catch (e) {
    res.status(500).send(e.message);
  }
});
main_router.post("/", InnerTypeCheckMiddleware, (req, res) => {
  try {
    WriteData(req.body);
    res.send("Данные записаны");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
main_router.put("/", InnerTypeCheckMiddleware, (req, res) => {
  try {
    res.send("PUT request to the homepage");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
main_router.delete("/", (req, res) => {
  try {
    res.send("DELETE request to the homepage");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
