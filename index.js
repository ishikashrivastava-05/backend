const express = require('express');
const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());


const  swaggerui = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const option = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "NODE JS API DOCUMENTATION by Tejaswini Kharche",
            version: "1.0.0"
        },
        servers: [
            {
                url: ("http://localhost:9090")
            }
        ]
    },
    apis: ['./Routes/tbl_admin_users.js']
    
}
const swaggerSpec = swaggerJSDoc(option)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec))



const {AdminUser} = require("./Routes/tbl_admin_users")
app.use("/", AdminUser);



const { Role_routes} = require("./Routes/tbl_admin_roles");
app.use("/", Role_routes);


const { Category_routes} = require("./Routes/tbl_admin_category");
app.use("/", Category_routes);



const {subCategory_routes} = require("./Routes/tbl_admin_subcategory");
app.use("/", subCategory_routes);


const {Offer_routes} = require("./Routes/tbl_admin_offer");
app.use("/", Offer_routes);


const {roleassign_routes} = require("./Routes/tbl_admin_roles_assign");
app.use("/", roleassign_routes);

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 9090;

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
});