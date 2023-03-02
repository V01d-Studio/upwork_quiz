import express from "express";
import { createQuiz, getQuiz } from "../controllers/quiz.controller";
import { methodNotAllowed } from "../utils/functions";

const router = express.Router();

router.route("/").post(createQuiz).all(methodNotAllowed);
router.route("/:id").get(getQuiz).all(methodNotAllowed);

export default router;
