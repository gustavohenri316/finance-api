import { Request, Response } from "express";
import { exportToExcel } from "../../services/expense-report-service/export";

export async function ExportToExcelController(req: Request, res: Response) {
  const { startDate, endDate, supplier, minValue, maxValue } = req.query;

  try {
    const buffer = await exportToExcel(
      startDate as string,
      endDate as string,
      supplier as string,
      parseFloat(minValue as string),
      parseFloat(maxValue as string)
    );

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=expense_reports.xlsx"
    );
    res.status(200).send(buffer);
  } catch (error) {
    console.error("Error exporting data to Excel:", error);
    res.status(500).json({ error: "Unable to export data to Excel." });
  }
}
