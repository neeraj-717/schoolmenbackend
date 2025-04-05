const { default: mongoose } = require("mongoose");

let teacherdata = mongoose.Schema({
    "name": String,
    "subject": String,
    "email": String,
    "photo": String,
    "classNamees": String,
    "experience": String,
    "degree": String,
    "hobbies": String,
    "projects": String,
    "contactNumber": String,
    "company": String,
    "timing": String,
    "details": String,
})

let teacher = new mongoose.model("teacher", teacherdata)
module.exports = teacher