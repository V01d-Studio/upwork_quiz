import { Request, Response } from "express";
import {
  createQuizInstance,
  fetchQuiz,
  postAnswers,
} from "../datastores/quiz.datastore";
import { wrappedResponse } from "../utils/functions";

export const createQuiz = async (req: Request, res: Response) => {
  const { quizTitle, quizDescription, questions } = req.body;
  const [quiz, _] = await createQuizInstance(
    quizTitle,
    quizDescription,
    questions
  );
  return wrappedResponse(res, true, null, quiz, 201);
};

export const getQuiz = async (req: Request, res: Response) => {
  const quizId = req.params.id;
  const result = await fetchQuiz(quizId);

  if (!result) {
    return wrappedResponse(res, false, [404], null, 404);
  }

  return wrappedResponse(res, true, null, result, 200);
};

export const submitQuiz = async (req: Request, res: Response) => {
  const { answers, quizId } = req.body;
  const result = await postAnswers(answers, quizId);
  return wrappedResponse(res, true, null, result, 201);
};