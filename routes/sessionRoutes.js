import express from "express";
import sessionController from "../controllers/sessionController.js";

const router = express.Router();

// GET 
router.get('/', sessionController.getSessions);

// POST
router.post('/', sessionController.createSession)

// PUT

// DELETE

export default router;