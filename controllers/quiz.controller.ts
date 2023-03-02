import { Request, Response } from "express";
import { wrappedResponse } from "../utils/functions";

export const createQuiz = async (req: Request, res: Response) => {
  const { quizTitle, quizDescription, questions } = req.body;
};

export const getQuiz = async (req: Request, res: Response) => {
  const quizId = req.params.id;
  const result: unknown[] = [];
  return wrappedResponse(res, true, [], result);
};
