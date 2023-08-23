import express from "express";
import * as noteController from "../controllers/notecontroller";

const router = express.Router();

router.get("/", noteController.getNotes);
router.get("/:noteId", noteController.getNote);
router.post("/", noteController.createNote);


export default router;
