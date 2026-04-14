import { getAllTask, getTaskById, createTask, updateTask, deleteTask } from "../models/task.models.js";

export const getTasks = async(req, res)=>{
    try {
        const tasks = await getAllTask(req.query.title, req.query.content);
        res.status(200).json({message: "Taches récupérées avec succès", tasks});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTask = async(req, res)=>{
    try {
        const taskId = req.params.id;
        const task = await getTaskById(taskId);
        res.status(200).json({message: "Tache récupérée avec succès", task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createNewTask = async(req, res)=>{
    try {
        const {title, content} = req.body;
        const task = await createTask(title, content, req.user);
        res.status(201).json({message: "Tache créée avec succès", task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateExistingTask = async(req, res)=>{
    try {
        const taskId = req.params.id;
        const {title, content} = req.body;
        const task = await updateTask(taskId, title, content);
        res.status(200).json({message: "Tache mise à jour avec succès", task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteExistingTask = async(req, res)=>{
    try {
        const taskId = req.params.id;
        const task = await deleteTask(taskId);
        res.status(200).json({message: "Tache supprimée avec succès", task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}