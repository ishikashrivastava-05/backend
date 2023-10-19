const express = require("express")

const Role_routes = express.Router()

const {getrole, postrole, updaterole, deleterole} =require("../Controller/tbl_admin_roles")

Role_routes.get("/api/admin/getrole",getrole)
Role_routes.post("/api/admin/postrole",postrole)
Role_routes.put("/api/admin/updaterole/:role_id",updaterole)
Role_routes.delete("/api/admin/deleterole/:role_id",deleterole)



module.exports={Role_routes}