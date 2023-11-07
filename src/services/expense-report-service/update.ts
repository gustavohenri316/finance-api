import { PrismaClient, ExpenseReport } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateExpenseReport(
  id: string,
  updatedData: Partial<ExpenseReport>
): Promise<ExpenseReport | null> {
  try {
    const expenseReport = await prisma.expenseReport.update({
      where: { id },
      data: updatedData,
    });
    return expenseReport;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
