import Report from "../models/ReportModel.js";

export const getReports = async(req, res) =>{
    try {
        const response = await Report.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getReportById = async(req, res) =>{
    try {
        const response = await Report.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createReport = async(req, res) =>{
    try {
        await Report.create(req.body);
        res.status(201).json({msg: "Report Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateReport = async(req, res) =>{
    try {
        await Report.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Report Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteReport = async(req, res) =>{
    try {
        await Report.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Report Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}