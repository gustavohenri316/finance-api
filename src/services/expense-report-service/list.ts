import { PrismaClient, ExpenseReport } from "@prisma/client";
const prisma = new PrismaClient();

export async function listExpenseReports(): Promise<ExpenseReport[]> {
  try {
    const expenseReports = await prisma.expenseReport.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return expenseReports;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
