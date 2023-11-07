import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type PropsCreate = {
  date: string;
  supplier: string;
  reason: string;
  value: number;
  proof: string;
};

export const createExpenseReport = async (data: PropsCreate) => {
  try {
    const expenseReport = await prisma.expenseReport.create({
      data: {
        date: data.date,
        supplier: data.supplier,
        reason: data.reason,
        value: data.value,
        proof: data.proof,
      },
    });
    return expenseReport;
  } catch (error) {
    throw error;
  }
};
