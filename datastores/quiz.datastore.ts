import { Questions } from "@prisma/client";
import prisma from "../configs/prisma.config";

export const createQuizInstance = async (
  quizTitle: string,
  quizDescription: string,
  questions: Omit<Questions, "id">[]
) => {
  const quiz = await prisma.quiz.create({
    data: { title: quizTitle, description: quizDescription },
  });
  const questionInstances = await prisma.questions.createMany({
    data: questions.map((question: any) => {
      question.quizId = quiz.id;
      return question;
    }),
  });
  return [quiz, questionInstances];
};
