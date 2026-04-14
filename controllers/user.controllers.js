import { registerUser , loginUser} from "../models/user.models.js";
import { isValidEmail } from "../utils/validateEmail.js";

export const register = async (req, res) =>{
    try {
        const {email, password} = req.body;

        //validation des champs
        if (!email || !password){
            return res.status(400).json({message: "Tous les champs sont obligatoires"});
        }
        //verification de l'email
        if (!isValidEmail(email)){
            return res.status(400).json({message: "Email invalide"});
        }
        const user = await registerUser(email, password);
        res.status(201).json({message: "Utilisateur créé avec succès", user});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Tous les champs sont obligatoires"
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                message: "Email invalide"
            });
        }

        // 🔥 LOGIN SERVICE (returns user + tokens)
        const result = await loginUser(email, password);

        res.status(200).json({
            message: "Utilisateur connecté avec succès",
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};