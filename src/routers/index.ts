import { Router } from "express";
import { CreateExpenseReportController } from "../controllers/expense-report-controller/create";
import { listExpenseReportsController } from "../controllers/expense-report-controller/list";
import { updateExpenseReportController } from "../controllers/expense-report-controller/update";
import { deleteExpenseReportController } from "../controllers/expense-report-controller/delete";
import { getExpenseReportByIdController } from "../controllers/expense-report-controller/find-id";
import { ExportToExcelController } from "../controllers/expense-report-controller/export";

const router = Router();

router.post("/expense-reports", CreateExpenseReportController);
router.get("/expense-reports", listExpenseReportsController);
router.patch("/expense-reports/:id", updateExpenseReportController);
router.delete("/expense-reports/:id", deleteExpenseReportController);
router.get("/expense-reports/:id", getExpenseReportByIdController);
router.get("/expense-reports-export", ExportToExcelController);

export { router };
