const repository = require('../repositories/users.repository')

const moduleExport = {};

moduleExport.getEmail =  async (email) => {
    try {
        if(email === undefined) throw "Car email is not defined!"
        return await repository.getOne({email : email})
    } catch (error) {
        throw error
    }
}

moduleExport.createUser = async (data) => {
    try {
        if(data === undefined) throw "User data is not defined!"
        return await repository.insertOne(data)
    } catch (error) {
        throw error
    }
}

module.exports = moduleExport