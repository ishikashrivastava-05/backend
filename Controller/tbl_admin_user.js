const connection = require("../Model/model");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});
const upload = multer({ storage: storage });

////////////////////// get ///////////////////////////////

const getAdminUser = async (req, res) => {
  try {
    let sqlQuery = "SELECT * FROM users";
    await connection.query(sqlQuery, (error, result) => {
      if (error) {
        console.error("Error:", error.sqlMessage);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

////////////////////// post ///////////////////////////////

const addAdminUser = async function (req, res) {
  let userData = {
    uid: req.body.uid,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    photo: req.file.location,
    aadhar: req.body.aadhar,
    doj: req.body.doj,
    qualification: req.body.qualification,
    dob: req.body.dob,
    address: req.body.address,
    state: req.body.state, 
    city: req.body.city,
    pin: req.body.pin,
    status: req.body.status,
  };

  let sqlquery = "INSERT INTO users SET ?";
  await connection.query(sqlquery, [userData], function (error, result) {
    if (error) {
      console.log(error.sqlMessage);
    } else {
      res.send(result);
    }
  });
};






////////////////////// update //////////////////////////////

const updateAdminUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = req.body;

    const updatedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      photo: data.photo,
      aadhar: data.aadhar,
      doj: data.doj,
      qualification: data.qualification,
      dob: data.dob,
      address: data.address,
      state: data.state, 
      city: data.city,
      pin: data.pin,
      status: data.status,
    };

    const sqlQuery = "UPDATE users SET ? WHERE uid = ?";

    await connection.query(sqlQuery, [updatedData, userId], (error, result) => {
      if (error) {
        console.error("Error:", error.sqlMessage);
        res.status(500).json({ error: "Failed to update user" });
      } else {
        res.json({ message: "User updated successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

////////////////////// delete //////////////////////////////

const deleteAdminUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const sqlQuery = "DELETE FROM users WHERE uid = ?";

    await connection.query(sqlQuery, userId, (error, result) => {
      if (error) {
        console.error("Error:", error.sqlMessage);
        res.status(500).json({ error: "Failed to delete user" });
      } else {
        res.json({ message: "User deleted successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAdminUser, addAdminUser, deleteAdminUser, updateAdminUser };