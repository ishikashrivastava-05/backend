const express = require("express")

const roleassign_routes = express.Router()

const {getroleassign, postroleassign, updateroleassign, deleteroleassign} =require("../Controller/tbl_roles_assign")

roleassign_routes.get("/api/admin/roleassign",getroleassign)
roleassign_routes.post("/api/admin/postroleassign",postroleassign)
roleassign_routes.put("/api/admin/updateroleassign/:uid",updateroleassign)
roleassign_routes.delete("/api/admin/deleteroleassign/:uid",deleteroleassign)


module.exports={roleassign_routes}