const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userServices = require('../services/users.services')
dotenv.config();
const exportModule = {};
exportModule.checkUser = (role) => {
    return async (req, res, next) => {
        await jwt({ secret: process.env.TOKEN_SECRET})(req, res, async () => {
            if (req.auth === undefined) return res.status(401).json({ "error": "Unauthorized access" })
            if (req.auth.id === undefined) return res.status(401).json({ "error": "Unauthorized access" })
            if (req.auth.email === undefined) return res.status(401).json({ "error": "Unauthorized access" })
            if (req.auth.role === undefined) return res.status(401).json({ "error": "Unauthorized access" })
        
            let checkEmail = await userServices.getEmail(req.auth.email)
        
            if (checkEmail == null) {
                return res.status(401).json({ error: "Unauthorized access. Please login again." })
            };
        
            let currentUser = {
                id: checkEmail.id,
                email: checkEmail.email,
                role: checkEmail.role,
            }
            
            switch (role) {
                case 'superadmin':
                    if(currentUser.role != "superadmin") return res.status(401).json({ "error": "Unauthorized access" })
                    break;

                case 'admin':
                    if(currentUser.role != "superadmin" || currentUser.role != "admin") return res.status(401).json({ "error": "Unauthorized access" })
                    break;
                    
                default:
                    break;
            }

            req.currentUser = currentUser
        
            next()
        })
    }
}

module.exports = exportModule