import { Request, Response } from "express";
import { listExpenseReports } from "../../services/expense-report-service/list";

export async function listExpenseReportsController(
  req: Request,
  res: Response
) {
  try {
    const expenseReports = await listExpenseReports();

    const totalBilled = expenseReports
      .filter((report) => report.status === "billed")
      .reduce((acc, report) => acc + report.value, 0);

    const totalUnbilled = expenseReports
      .filter((report) => report.status === "not_billed")
      .reduce((acc, report) => acc + report.value, 0);

    const totalOverall = expenseReports.reduce(
      (acc, report) => acc + report.value,
      0
    );

    res.status(200).json({
      expenseReports,
      totalBilled,
      totalUnbilled,
      totalOverall,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to list expense reports." });
  }
}
