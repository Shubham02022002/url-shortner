import express from "express";
import {
  generateUrl,
  redirectUser,
  urlAnalytics,
} from "../controllers/url.controller.js";
const router = express.Router();
router.post("/url", generateUrl);
router.get("/:shortId", redirectUser);
router.get("/analytics/:shortId", urlAnalytics);
export default router;
