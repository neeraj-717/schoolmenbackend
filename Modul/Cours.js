const {  mongoose } = require("mongoose");

let Coursdata=mongoose.Schema({
    "Cname":String,
    "Discripaction":String,
    "Duration":String,
    "Level":String,
    "Fees":String,

})

let cours=new mongoose.model("cours",Coursdata)
module.exports=cours