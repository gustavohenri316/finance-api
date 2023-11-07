import { Request, Response } from "express";
import { deleteExpenseReport } from "../../services/expense-report-service/delete";

export async function deleteExpenseReportController(
  req: Request,
  res: Response
) {
  const { id } = req.params;

  try {
    const expenseReport = await deleteExpenseReport(id);

    if (!expenseReport) {
      return res.status(404).json({ error: "Expense report not found." });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Unable to delete the expense report." });
  }
}
