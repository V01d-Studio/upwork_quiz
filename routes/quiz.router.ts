import express from "express";
import {
  createQuiz,
  getQuiz,
  submitQuiz,
} from "../controllers/quiz.controller";
import { methodNotAllowed } from "../utils/functions";

const router = express.Router();

router.route("/").post(createQuiz).all(methodNotAllowed);
router.route("/:id").get(getQuiz).all(methodNotAllowed);
router.route("/submit-quiz").post(submitQuiz).all(methodNotAllowed);

export default router;
