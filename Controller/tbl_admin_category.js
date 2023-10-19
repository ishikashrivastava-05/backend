const { response } = require("express");
const connection = require('../Model/model');
const db = require("../Model/model");

let getcategory = async (req, res) => {
    try {
        const q1 = "SELECT * FROM admin_product_category"; 
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






/////////////////////////////////////////////////////
let postcategory = async (req, res) => {
    try {
        const data = req.body;
        const q1 = "INSERT INTO admin_product_category SET ?";
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



//////////////////////////////////////////////////////////////////////////////////////////////////
let updatecategory = async (req, res) => {
    try {
        const data = [req.body, req.params.P_Category_Id];
        const q2 = "UPDATE admin_product_category SET ? WHERE P_Category_Id = ?";
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


/////////////////////////////////////////////////////////////////////////////////////////////

let deletecategory = async (req, res) => {
    try {
        const data = req.params.P_Category_Id;
        const q2 = "DELETE FROM admin_product_category WHERE P_Category_Id = ?";
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

module.exports = { getcategory, postcategory, updatecategory, deletecategory };