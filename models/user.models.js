import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async(email, password) => {

    //verification si email existe déjà
    const existEmail = await prisma.user.findUnique({
        where: {email}
    })
    if (existEmail){
        throw new Error("Email already exists");
    }

    //hashage du mot de passe
    const hash = await bcrypt.hash(password, 10);

    //création de l'utilisateur
    const user = await prisma.user.create({
        data: {
            email,
            password: hash
        }
    });

    return user;
    
};
export const loginUser = async (email, password) => {

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error("Email not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    // 🔥 GENERATE TOKENS DIRECTLY
    const accessToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: process.env.EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
        { id: user.id },
        process.env.REFRESH_SECRET,
        { expiresIn: process.env.REFRESH_EXPIRES_IN }
    );

    return {
        user: {
            id: user.id,
            email: user.email
        },
        accessToken,
        refreshToken
    };
};