import jwt from "jsonwebtoken";

export const auth = (req, res, next) =>{
    const header = req.headers.authorization;
    if (!header){
        return res.status(401).json({message: "No token"});
    }
    const token = header.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log("TOKEN HEADER:", req.headers.authorization);
        console.log("DECODED USER:", req.user);
        next();
    } catch  {
        res.status(401).json({message: "Token invalide"})
    }
};

