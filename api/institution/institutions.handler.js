const crud = require("../../crud/index");


const tableName = 'Instituicao';


async function getInstitutions() {
    return await crud.get(tableName);
}

async function getInstitution(id) {
    return await crud.getById(tableName, id);
}

async function createInstitution(data) {
    return await crud.save(tableName, undefined, data);
}

async function editInstitution(data, id) {
    return await crud.save(tableName, id, data);
}

async function removeInstitution(id) {
    return await crud.remove(tableName, id);
}



module.exports = {
    getInstitutions,
    getInstitution,
    createInstitution,
    editInstitution,
    removeInstitution
}