const db = require('./config/db');

const getAllPeople = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM people');
        return rows;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    getAllPeople
};
