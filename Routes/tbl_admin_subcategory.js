const express = require("express")

const subCategory_routes = express.Router()

const {getsubcategory, postsubcategory, updatesubcategory, deletesubcategory} =require("../Controller/tbl_admin_subcategory")

subCategory_routes.get("/api/admin/getsubcategory",getsubcategory)
subCategory_routes.post("/api/admin/postsubcategory",postsubcategory)
subCategory_routes.put("/api/admin/updatesubcategory/:SubCategory_id",updatesubcategory)
subCategory_routes.delete("/api/admin/deletesubcategory/:SubCategory_id",deletesubcategory)


module.exports={subCategory_routes}