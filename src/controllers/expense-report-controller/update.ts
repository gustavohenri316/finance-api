import { Request, Response } from "express";
import { updateExpenseReport } from "../../services/expense-report-service/update";

export async function updateExpenseReportController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const expenseReport = await updateExpenseReport(id, updatedData);

    if (!expenseReport) {
      return res.status(404).json({ error: "Expense report not found." });
    }

    res.status(200).json(expenseReport);
  } catch (error) {
    res.status(500).json({ error: "Unable to update the expense report." });
  }
}
