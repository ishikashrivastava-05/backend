const express = require("express")

const Category_routes = express.Router()

const {getcategory, postcategory, updatecategory, deletecategory} =require("../Controller/tbl_admin_category")

Category_routes.get("/api/admin/getcategory",getcategory)
Category_routes.post("/api/admin/postcategory",postcategory)
Category_routes.put("/api/admin/updatecategory/:P_Category_Id",updatecategory)
Category_routes.delete("/api/admin/deletecategory/:P_Category_Id",deletecategory)


module.exports={Category_routes}