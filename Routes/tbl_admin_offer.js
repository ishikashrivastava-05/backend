const express = require("express")

const Offer_routes = express.Router()

const {getoffer, postoffer, updateoffer, deleteoffer} =require("../Controller/tbl_admin_offer")

Offer_routes.get("/api/admin/getoffer",getoffer)
Offer_routes.post("/api/admin/postoffer",postoffer)
Offer_routes.put("/api/admin/updateoffer/:offer_id",updateoffer)
Offer_routes.delete("/api/admin/deleteoffer/:offer_id",deleteoffer)


module.exports={Offer_routes}