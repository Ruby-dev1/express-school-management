import express from "express"
const router = express.Router()
const students = [];

//!CRUD subjects

//*get all subject
 router.get ("/subjects", (req, res)=>{
     const query = req.query;
       console.log(query);
        res.status(200).json ({
        message: "all subjects",
        success: true,
        data: subjects,
       })
    
 });

 //* get subject by id 

 router.get("/subjects/:id",(req,res)=>{
   const {id} = req.params;
    const subject = subjects.find((subject)=> subject.id=== Number(id))

    if(!subject){
        res.status(404).json({
            message:"subject not found",
            success: false,
            data: null
        });
        return

    }


// const id = req.params.id;

    res.status(200).json ({
        message: `subject is fetched`,
        success: true,
        data:[{
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }]
    })

    })
 //* create subject

 router.post("/subjects",(req, res)=>{
      const {name} = req.body;
    subjects.push({
        name,
        createdAt: Date.now(),
        _id:subjects.length +1 ,
    });

        res.status(201).json({
        message: "subject updated",
        success: true,
        data: subjects[subjects.length -1],
 });

 })


 //* update subject

 router.put("/subjects/:id", (req, res)=>{
     const {id} = req.params;
const {name} = req.body;
const index = subjects.findindex((subject)=> subject.id === Number(id));

if(index=== -1){
    res.status(404).json({
        message: "subject not found",
        success: false,
        data: null,
    });
    return ;

    subjects[index]={
        ...subjects[index],
        name,
       
    };
}

    res.status(200).json({
        message: "subject updated",
        success: true,
        data: subjects[index],
            
        
 });
    // res.send ("<h1> users created </h1>")
})

 //* delete subject
 router.delete("/subjects/:id", (req, res)=>{
   const {id} = req.params;
const index = subjects.findindex((subject)=> subject.id === Number(id));

if(index === -1){
    res.status(404).json({
        message: "subject not found",
        scucess: false,
        data: null,
    });
    return;
}
    subjects.splice(index,1);
    res.status(200).json({
        message: "subject deleted",
        success: true,
        data: null,
    });
})

export default router;