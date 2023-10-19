const express = require('express');
const AdminUser = express.Router();
const { getAdminUser, addAdminUser, updateAdminUser, deleteAdminUser } = require("../Controller/tbl_admin_user"); 


let multerS3 = require('multer-s3');
let multer = require("multer");
const { S3Client } = require('@aws-sdk/client-s3');

const bucketName = "ishikaproducts"; 

//store file in AWS S3 configuration 
const s3 = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: 'AKIAQE2U4ZEHLGRVOXNY',
        secretAccessKey: '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'
    }
})

//Storage Configuraion
let storage = multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname })
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage });





///
/**
 * @swagger
 *  components:
 *      schemas:
 *          admin_users:
 *              type : object
 *              properties : 
 *                  uid:
 *                      type: number
 *                  name:
 *                      type: string
 *                  aadhar:
 *                      type: string
 *                  mobile:
 *                      type: string
 *                  photo:
 *                      type: string
 *                  DOB:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password: 
 *                      type: string
 *                  date_of_joining:
 *                      type: string
 *                  qualification:
 *                      type: string
 *                  address:
 *                      type: string
 *                  city:
 *                      type: string               
 *                  pincode:
 *                      type: string
 *                  status: 
 *                      type: string 
 * 
 */

/**
 *@swagger
 *  /getdata:
 *          get:
 *              summary: This get api is used to check get metod is working or not
 *              description: This api is used to check get metod is working or not
 *              responses:
 *                  200:
 *                      description: to test get method
 *                      content: 
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/admin_users'
 * 
 
*/

/**
 * 
 * @swagger
 *  /postdata:
 *      post:
 *          summary: This post api is used to check post metod is working or not
 *          descripition: This api is used to check post metod is working or not
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/component/schemas/admin_users'
 *          responses:
 *              200:
 *                  description: added successfully
 */

/**
 * @swagger
 *  /delete/{uid}:
 *     delete:
 *       summary: Delete Employee
 *       description: Delete an employee record by id.
 *       parameters:
 *         - in: path
 *           name: uid
 *           required: true
 *           description: ID of the employee to delete.
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: Employee deleted successfully.
 */

/**
 * @swagger
 *  /update/{uid}:
 *      patch:
 *          summary: Update an employee's information.
 *          description: Update an employee's information.
 *          parameters:
 *              - in: path
 *                name: uid
 *                required: true
 *                description: ID of the employee to update.
 *                schema:
 *                  type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/admin_users'
 *          responses:
 *              200:
 *                  description: Employee updated successfully.
 *                  content:
 *                     application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/admin_users'
 */

///
AdminUser.get("/api/admin/viewuser", getAdminUser);
// AdminUser.post("/api/admin/adduser",addAdminUser);
AdminUser.post("/api/admin/adduser", upload.single('photo'), addAdminUser);
AdminUser.put("/api/admin/updateuser/:uid", updateAdminUser); 
AdminUser.delete("/api/admin/deleteuser/:userId", deleteAdminUser); 

module.exports = { AdminUser };