import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError.js";

export const errorMiddleware = (
  error: Error & Partial<AppError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";

  if (statusCode === 500) {
    console.error(error);
  }

  return res.status(statusCode).json({
    status: "error",
    message,
  });
};
