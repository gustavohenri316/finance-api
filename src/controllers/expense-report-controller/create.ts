import { Request, Response } from "express";
import { createExpenseReport } from "../../services/expense-report-service/create";

export async function CreateExpenseReportController(
  req: Request,
  res: Response
) {
  try {
    const data = req.body;
    const expenseReport = await createExpenseReport(data);
    res.status(201).json(expenseReport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Não foi possível criar o relatório de despesas." });
  }
}
