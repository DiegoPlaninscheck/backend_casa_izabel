const crud = require("../../crud/index");
const tableName = 'Quiz';

async function getAllQuiz() {
    return await crud.get(tableName);
}

async function getQuiz(id) {
    return await crud.getById(tableName, id);
}

async function createQuiz(data) {
    return await crud.save(tableName, undefined, data);
}

async function editQuiz(data, id) {
    return await crud.save(tableName, id, data);
}

async function removeQuiz(id) {
    return await crud.remove(tableName, id);
}

module.exports = {
    getAllQuiz,
    getQuiz,
    createQuiz,
    editQuiz,
    removeQuiz
}