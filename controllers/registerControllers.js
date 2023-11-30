const registerModel = require("../models/registerModels.js");


const addUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await registerModel.addUser(req.body);
        console.log(user);
        if (user) {
            res.json(user);
        } else {
            res.status(500).json({ message: "No se pudo conectar con el servidor" })
        }

    } catch (error) {
        console.log(error)
    }
};

const getUsers = async (req, res) => {
    const user = await registerModel.getUsers();
    if (user) {
        res.json(user);
    } else {
        res.status(500).json({ message: "No se pudo conectar con el servidor" })
    }
};

module.exports = {
    addUser, getUsers
}