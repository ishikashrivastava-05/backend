const { response } = require("express");
const connection = require('../Model/model');
const db = require("../Model/model");

let getsubcategory = async (req, res) => {
    try {
        const q1 = "SELECT * FROM tbl_admin_sub_category"; 
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


let postsubcategory = async (req, res) => {
    try {
        const data = req.body;
        const q1 = "INSERT INTO tbl_admin_sub_category SET ?";
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

let updatesubcategory = async (req, res) => {
    try {
        const data = [req.body, req.params.P_Category_Id];
        const q2 = "UPDATE tbl_admin_sub_category SET ? WHERE SubCategory_id = ?";
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

let deletesubcategory = async (req, res) => {
    try {
        const data = req.params.P_Category_Id;
        const q2 = "DELETE FROM tbl_admin_sub_category WHERE SubCategory_id = ?";
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

module.exports = { getsubcategory, postsubcategory, updatesubcategory, deletesubcategory };