import express from "express"
const router = express.Router()
const teachers = [];



//! CRUD teachers

//* get all teachers 

 router.get("/",(req,res)=>{
    const query = req.query;
    console.log(query);
     res.status(200).json ({
        message: "all teachers",
        success: true,
        data: teachers,
       })
    })



 //* get teachers by id 

 router.get("/:id",(req,res)=>{
    // const id = req.params.id
     const {id} = req.params;
    const teacher = teachers.find((teacher)=> teacher.id=== Number(id))

    if(!teacher){
        res.status(404).json({
            message: "teacher not found",
            success:false,
            data: null,
        });
        return 


    }


    res.status(200).json({
        message: `teachers by id ${id} fetched`,
        success: true,
        data:[{
            id:id,
            name:"Avishek",
            email:"Avi@gmail.com"

        }]
    })
 })

 //* create teachers id
 router.post("/teachers", ()=>{
    

 const {name, email, password} = req.body;
    teachers.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        _id:teachers.length +1 ,
    });

        res.status(201).json({
        message: "teacher updated",
        success: true,
        data: teachers[teachers.length -1],
 });

 })

   

 //* update teachers by id 
 router.put("/teachers/:id", (req, res)=>{
    // const id = req.params.id
    const {id} = req.params;
const {name, email, password} = req.body;
const index = teachers.findindex((teacher)=> teacher.id === Number(id));

if(index=== -1){
    res.status(404).json({
        message: "teacher not found",
        success: false,
        data: null,
    });
    return ;

    teachers[index]={
        ...teachers[index],
        name,
        email,
        password,
    };   

    res.status(200).json({
        message:`teacher updated`,
        success: true,
        data: teachers[index]
    })
 }
})

 //* delete teachers by id 

 router.delete("/teachers/:id", (req,res)=>{
    const {id} = req.params;
const index = teachers.findindex((teacher)=> teacher.id === Number(id));

if(index === -1){
    res.status(404).json({
        message: "teacher not found",
        scucess: false,
        data: null,
    });
    return;
}
    users.splice(index,1);
    res.status(200).json({
        message: "teacher deleted",
        success: true,
        data: null,
    });
})

export default router;