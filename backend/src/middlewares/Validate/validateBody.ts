import { Request, Response, NextFunction } from "express";
import { ZodError, ZodSchema } from "zod";

export const validateBody =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          erros: error.issues.map(issue => ({
            campo: issue.path.join("."),
            mensagem: issue.message
          }))
        });
      }

      return res.status(400).json({
        erro: "Erro de validação"
      });
    }
  };