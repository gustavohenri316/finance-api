import { Request, Response } from "express";
import { getExpenseReportById } from "../../services/expense-report-service/find-id";

export async function getExpenseReportByIdController(
  req: Request,
  res: Response
) {
  const { id } = req.params;

  try {
    const expenseReport = await getExpenseReportById(id);

    if (!expenseReport) {
      return res.status(404).json({ error: "Expense report not found." });
    }

    res.status(200).json(expenseReport);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve the expense report." });
  }
}
