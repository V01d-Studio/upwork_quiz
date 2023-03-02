import { Request, Response } from "express";
import { createQuizInstance } from "../datastores/quiz.datastore";
import { wrappedResponse } from "../utils/functions";

export const createQuiz = async (req: Request, res: Response) => {
  const { quizTitle, quizDescription, questions } = req.body;
  const [quiz, _] = await createQuizInstance(
    quizTitle,
    quizDescription,
    questions
  );
  return wrappedResponse(res, true, [], quiz);
};

export const getQuiz = async (req: Request, res: Response) => {
  const quizId = req.params.id;
  const result: unknown[] = [];
  return wrappedResponse(res, true, [], result);
};
