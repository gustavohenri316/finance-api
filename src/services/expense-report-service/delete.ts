import { PrismaClient, ExpenseReport } from "@prisma/client";
const prisma = new PrismaClient();

export async function deleteExpenseReport(
  id: string
): Promise<ExpenseReport | null> {
  try {
    const expenseReport = await prisma.expenseReport.delete({
      where: { id },
    });
    return expenseReport;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
