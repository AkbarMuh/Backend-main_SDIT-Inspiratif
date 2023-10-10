import Guru from "../models/GuruModel.js";

export const getGurus = async(req, res) =>{
    try {
        const response = await Guru.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGuruById = async(req, res) =>{
    try {
        const response = await Guru.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createGuru = async(req, res) =>{
    try {
        await Guru.create(req.body);
        res.status(201).json({msg: "Guru Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateGuru = async(req, res) =>{
    try {
        await Guru.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Guru Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteGuru = async(req, res) =>{
    try {
        await Guru.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Guru Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}