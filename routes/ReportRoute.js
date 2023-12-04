import express from "express";
import {
    getReports, 
    getReportById,
    createReport,
    updateReport,
    deleteReport
} from "../controllers/ReportController.js";

const router = express.Router();

router.get('/report', getReports);
router.get('/report/:id', getReportById);
router.post('/report', createReport);
router.patch('/report/:id', updateReport);
router.delete('/report/:id', deleteReport);

export default router;