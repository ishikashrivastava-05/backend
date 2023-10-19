const { response } = require("express");
const connection = require('../Model/model');
const db = require("../Model/model");

let getrole = async (req, res) => {
    try {
        const q1 = "SELECT * FROM  admin_roles"; 
        await db.query(q1, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
};

let postrole = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const q1 = "INSERT INTO  admin_roles SET ?"; 
        console.log(q1)
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
                console.log("data is added")
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
};

let updaterole = async (req, res) => {
    try {
        const data = [req.body, req.params.role_id];
        const q2 = "UPDATE  admin_roles SET ? WHERE role_id = ?"; 
        await db.query(q2, data, (error, result) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
};

let deleterole = async (req, res) => {
    try {
        const data = req.params.role_id;
        const q2 = "DELETE FROM  admin_roles WHERE role_id = ?";
        await db.query(q2, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
}


module.exports = { getrole, postrole, updaterole, deleterole };