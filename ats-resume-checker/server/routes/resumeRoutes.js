import express from "express";
import multer from "multer";
import { analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".pdf")) {
      cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  }
});

router.post("/analyze", upload.single("resume"), analyzeResume);

export default router;
