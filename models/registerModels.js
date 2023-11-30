const mariadb = require('mariadb');

const pool = mariadb.createPool({ host: "localhost", user: "root", password: "root", database: "semana20", connectionLimit: 5 });

const getUsers = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM login");
        return (rows)
    }
    catch (error) {
        console.log(error)
    } finally {
        if (conn) conn.release();
    } return false
}


const addUser = async (data) => {
    console.log(data)
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO login(user, password, email) VALUES (?, ?, ?)", [data.user, data.password, data.email]);
        return ({ id: parseInt(rows.insertId), ...data });
    }
    catch (error) {
        console.log(error)
    } finally {
        if (conn) conn.release();
    } return false
}

module.exports = {
    addUser, getUsers
}