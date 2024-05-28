require("dotenv").config();
const express = require("express");
const app = express();
// require("./db/conn");
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());


const cookiesparser = require("cookie-parser");

app.use(express.urlencoded({extended: false}));
app.use(cookiesparser());
app.use(cors());




app.listen(port, () =>{
    console.log(`connecting is setup at ${port}`);
});