import Router from "express";
import { InnerTypeCheckMiddleware } from "../middleware/inner-type-check.middleware.js";
import { DeleteData, GetData, UpdateData, WriteData } from "../utils/fileDB.util.js";

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
    res.status(201).send("Данные записаны");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
main_router.put("/", InnerTypeCheckMiddleware, (req, res) => {
  try {
    UpdateData(req.body);
    res.status(200).send("Документ обновлён");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
main_router.delete("/:id?", (req, res) => {
  try {
    DeleteData(req.params.id);
    res.status(200).send("Документ удалён");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
