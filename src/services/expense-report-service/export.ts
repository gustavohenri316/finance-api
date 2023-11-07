import * as excel from "exceljs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function exportToExcel(
  startDate: string | undefined,
  endDate: string | undefined,
  supplier: string | undefined,
  minValue: number | undefined,
  maxValue: number | undefined
): Promise<Buffer> {
  try {
    if (minValue === undefined || isNaN(minValue)) {
      minValue = 0;
    }

    if (maxValue === undefined || isNaN(maxValue)) {
      maxValue = Number.MAX_SAFE_INTEGER;
    }

    let whereCondition = {};

    if (startDate && endDate) {
      whereCondition = {
        ...whereCondition,
        date: { gte: startDate, lte: endDate },
      };
    }

    if (supplier) {
      whereCondition = {
        ...whereCondition,
        supplier: { contains: supplier },
      };
    }

    if (minValue !== undefined && maxValue !== undefined) {
      whereCondition = {
        ...whereCondition,
        value: { gte: minValue, lte: maxValue },
      };
    }

    const expenseReports = await prisma.expenseReport.findMany({
      where: whereCondition,
    });

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("ExpenseReports");

    worksheet.addRow(["Data", "Fornecedor", "Motivo", "Comprovante", "Valor"]);

    expenseReports.forEach((report) => {
      worksheet.addRow([
        report.date,
        report.supplier,
        report.reason,
        report.proof,
        report.value,
      ]);
    });

    const buffer = (await workbook.xlsx.writeBuffer()) as Buffer;
    return buffer;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
