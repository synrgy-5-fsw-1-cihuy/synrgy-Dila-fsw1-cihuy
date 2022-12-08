'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10
const moduleExport = {}


moduleExport.compare = (data, hashed) => {
    return bcrypt.compare(data, hashed)
}

moduleExport.hashPassword = async (pass) => {
    try{
        return await bcrypt.hash(pass,saltRounds);
    } 
    catch (error) {
        throw error
    }
}
module.exports = moduleExport