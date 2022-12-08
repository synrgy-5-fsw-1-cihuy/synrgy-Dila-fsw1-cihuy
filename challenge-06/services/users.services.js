const models = require('../models');
const userModel = models.User;


const moduleExport = {};

moduleExport.getEmail =  async (email) => {
    try{
        return await userModel.findOne({
            where: { email: email }
        })
    }catch (error) {
        throw error
    }
    
}


module.exports = moduleExport