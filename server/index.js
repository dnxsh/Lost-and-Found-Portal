const express=require("express");
const app=express();
const connectDB = require('./db'); 
const PORT = process.env.PORT || 2000;
require('dotenv').config();

const cors=require("cors");
const bodyParser=require("body-parser");
const expressFileupload=require("express-fileupload");

const path = require("path");
const _dirname = path.resolve();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(expressFileupload());
connectDB();


const itemRoute=require("./routes/ItemRoute");
app.use("/report",itemRoute);

app.use('/itemImage', express.static(__dirname + '/public/itemImage'));

app.get("/",(req,res)=>{
    res.send("Hello")
})


// app.use(express.static(path.join(_dirname, 'client/')));

// app.get('*', (_, res) => {
// res.sendFile(path.resolve(_dirname, 'client', 'dist', 'index.html'));
// });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});