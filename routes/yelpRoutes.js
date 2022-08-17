import express from "express";
import yelpController from "../controllers/yelpController.js";

const router = express.Router();

// GET
router.get("/search", yelpController.searchYelp);

// POST

// PUT

// DELETE
export default router;
