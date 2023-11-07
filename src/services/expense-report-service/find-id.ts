import { PrismaClient, ExpenseReport } from "@prisma/client";
const prisma = new PrismaClient();

export async function getExpenseReportById(
  id: string
): Promise<ExpenseReport | null> {
  try {
    const expenseReport = await prisma.expenseReport.findUnique({
      where: { id },
    });
    return expenseReport;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
