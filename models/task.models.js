import prisma from "../config/prisma.js";

export const getAllTask = async(title, content) =>{
    const tasks = await prisma.todo.findMany({
        where: {
            title: { contains: title },
            content: { contains: content }
        }
    });

    if (tasks.length === 0){
        throw new Error("Aucune tache trouvée");
    }
    return tasks;

}

export const getTaskById = async(id) =>{
    const task = await prisma.todo.findUnique({
        where: {id}
    });
    if (!task){
        throw new Error("Tache non trouvée");
    };
    return task;
}

export const createTask = async(title, content, user) =>{
    const task = await prisma.todo.create({
        data: {
            title,
            content,
            userId: user.id
        }
    });
    return task;
}

export const updateTask = async(id, title, content) =>{
    const task = await prisma.todo.update({
        where: {id},
        data: {title, content}
    });
    if (!task){
        throw new Error("Tache non trouvée");
    };
    return task;
}

export const deleteTask = async(id) =>{
    const task = await prisma.todo.delete({
        where: {id}
    });
    if (!task){
        throw new Error("Tache non trouvée");
    };
    return task;
}


