express=require("express")
bodyParser = require('body-parser')

const {default: mongoose, syncIndexes } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Schoolmen").then(()=>{
    console.log("mongodb connect")
}).catch((err)=>{
    console.log(err)
})


app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({}))


// inporescima     ----------

const cours = require("./Modul/Cours");
const teacher = require("./Modul/Teacher");



cors=require("cors")
app.use(cors())  



app.listen(8083,()=>{
    console.log("server start")
})


app.post("/Cours", async(req,res)=>{
   console.log(req.body)

   let Coursdata = await cours({
    "Cname":req.body.formData.Cname,
    "Discripaction":req.body.formData.Discripaction,
    "Duration":req.body.formData.Duration,
    "Level":req.body.formData.Level,
    "Fees":req.body.formData.Fees,
   })

   let result = Coursdata.save()

   if(result){
    res.json(
        {
            status:true,
            msg:"Data added "
        }
    )
   }else{
    res.json(
        {
            status:false,
            msg:"Data  added to faild "
        }
    )
   }

})



app.post("/Teacherinfo",async(req,res)=>{
    let data = await teacher({
        "name": req.body.name,
        "subject": req.body.subject,
        "email": req.body.email,
        "photo": req.body.photo,
        "classNamees": req.body.classNamees, 
        "experience": req.body.experience,
        "degree": req.body.degree,
        "hobbies": req.body.hobbies, 
        "projects": req.body.projects, 
        "contactNumber": req.body.contactNumber,
        "company": req.body.company,
        "timing": req.body.timing,
        "details": req.body.details
    });
    

    let result = data.save()

    if(result){
        res.json(
            {
                status:true,
                msg:"Data added "
            }
        )
       }else{
        res.json(
            {
                status:false,
                msg:"Data  added to faild "
            }
        )
       }
})

app.get("/getteacher",async(re,res)=>{
    let data = await teacher.find()

    if (data) {
        res.json(
            {
                status:true,
                teacherdata:data
            }
        )
    }else{
        res.json(
            {
                status:false,
            }
        ) 
    }
})


// deleteteacher data --------------

app.post("/deleteteacherdada",async(req,res)=>{
    let result = await teacher. findOneAndDelete({
        _id:req.body.item._id
    })

    if (result) {
        res.json(
            {
                status:true,
            }
        )
    }else{
        res.json(
            {
                status:false,
            }
        ) 
    }
})

app.post("/student",(req,res)=>{
    console.log(req.body)
})   


app.get("/getcorse", async(req,res)=>{
    let data = await cours.find()

    if (data) {
        res.json(
            {
                status:true,
                coursdata:data
            }
        )
    }else{
        res.json(
            {
                status:false,
            }
        ) 
    }
})



app.post("/Coursdelet",async(req,res)=>{
    let result = await cours. findOneAndDelete({
        _id:req.body.item._id
    })

})


app.get("/",(req,res)=>{
    res.json({
        status:true
    })
})