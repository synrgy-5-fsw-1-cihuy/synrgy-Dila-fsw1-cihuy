
'use strict'

const userServices = require('../services/users.services');

const jwtTokenUtil = require('../util/jwt_util');
const bcrypt = require('../util/bcrypt')

const controller = {}

controller.registerUserMember = async (req, res) => {
    try {
        let fields = req.fields;

        let checkEmail  = await userServices.getEmail(fields.email);
        if(checkEmail != null) throw "User existed!"

        let password = await bcrypt.hashPassword(fields.password);

        const data = {
            email: fields.email,
            password: password,
            role: "member",
            createdAt: fields.createdAt,
            updatedAt: fields.updatedAt

        }

        await userServices.createUser(data).catch((err) => {
            console.log(err)
            res.end(err)
            return
        })

        return res.status(201).json({
            message: "User successfully created!",
            data: {
                email: fields.email,
                role: "member"
            }
        });

    }

    catch (err) {
        res.status(422).json({
            Error: "ERROR: Unable to create a user"
        });
        throw err;
    }
};

controller.registerUserAdmin = async (req, res) => {
    try {
        let fields = req.fields;
        
        let checkEmail  = await userServices.getEmail(fields.email);
        if(checkEmail != null) throw "User existed!"

        let password = await bcrypt.hashPassword(fields.password);

        const data = {
            email: fields.email,
            password: password,
            role: "admin",
            createdAt: fields.createdAt,
            updatedAt: fields.updatedAt

        }

        await userServices.createUser(data).catch((err) => {
            console.log(err)
            res.end(err)
            return
        })

        return res.status(201).json({
            message: "User Admin successfully created!",
            data: {
                email: fields.email,
                role: "admin"
            }
        });

    }

    catch (err) {
        res.status(422).json({
            Error: "ERROR: Unable to create a user"
        });
        throw err;
    }
};


controller.loginUser = async (req, res) => {
    try {
        let fields = req.fields;
        
        let checkEmail  = await userServices.getEmail(fields.email);
        if (checkEmail == null) {
            res.status(400).json({error: "User not found, please register first."});
            return;
        };
        const data = {
            id: checkEmail.id,
            email: checkEmail.email,
            role: checkEmail.role
        }
        
        let checkPassword = await bcrypt.compare(fields.password, checkEmail.password);
        if (checkPassword == true) {
            const tokenGenerated = jwtTokenUtil.sign(data);
            res.status(200).json({
                message: "Successfully logged in!",
                token: tokenGenerated,
                role: checkEmail.role
            });
        return
        }

        res.status(401).json({
            error: "Incorrect email or password, please try again."
        });


    }
    
    catch (err) {
    res.status(422).json({
        Error: "ERROR: Unable to log in."
    });
    throw err;
}

}

controller.activeUser = async (req, res) => {
    try {
        return res.status(200).json({
            data: req.currentUser
        })
    } catch (error) {
        return res.status(400).json({"error" : error})
    }
}
module.exports = controller;