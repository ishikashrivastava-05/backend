const { response } = require("express");
const connection = require('../Model/model');
const db = require("../Model/model");

let getroleassign = async (req, res) => {
    try {
        const q1 = "SELECT * FROM admin_roles_assign"; 
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

let postroleassign = async (req, res) => {
    try {
        const data = req.body;
        const q1 = "INSERT INTO admin_roles_assign SET ?";
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
                console.log("data is added");
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
};

let updateroleassign = async (req, res) => {
    try {
        const data = [req.body, req.params.P_Category_Id];
        const q2 = "UPDATE admin_roles_assign SET ? WHERE uid = ?";
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

let deleteroleassign = async (req, res) => {
    try {
        const data = req.params.P_Category_Id;
        const q2 = "DELETE FROM admin_roles_assign WHERE uid = ?";
        await db.query(q2, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage);
            } else {
                res.send(result);
                console.log("data is deleted")
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
}

module.exports = { getroleassign, postroleassign, updateroleassign, deleteroleassign };