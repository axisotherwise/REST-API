import express from "express";

import * as userControllers from "../controllers/user.js";

const router = express.Router();

router.get("/", userControllers.getUsers);
router.post("/", userControllers.postUser);

export default router;