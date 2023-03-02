import { Request, Response, NextFunction } from "express";

export const methodNotAllowed = (
  req: Request,
  res: Response,
  next: NextFunction
) => res.status(405).send({ error: "Method not allowed" });

export const wrappedResponse = (
  res: Response,
  success: boolean,
  errors: number[],
  data: unknown
) => {
  return res.status(errors[0]).json({
    success,
    errors,
    data,
  });
};

export const parseParam = (paramString: string) => {
  const params = paramString.split("&");
  const result = {};
  params.forEach((paramCouple: string) => {
    const [key, value] = paramCouple.split("=");
    (result as any)[key] = value;
  });
  return result;
};
