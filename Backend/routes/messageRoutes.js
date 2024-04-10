import express from "express";
import { sendMsg } from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMsg);

export default router;