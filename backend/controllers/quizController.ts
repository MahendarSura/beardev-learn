import { Request, Response } from 'express';

export const getQuiz = (req: Request, res: Response) => {
  res.json({ message: "Quiz data will be here." });
};
