 import express from "express"
 const router = express.Router();
 const students = [];

  //!CRUD STUDENTS 
 //* get all students

 router.get ("/students", (req, res)=>{
       // res.send("<h1> all users </h1>")
       const query = req.query;
       console.log(query);
        res.status(200).json({
        message: "all students",
        success: true,
        data: students,
       })
    })

 //* get all students by id
 router.get("/students/:id",(req, res)=>{
    // app.send("<h1> students </h1>")
    // const id = req.params.id
    const {id} = req.params;
    const student = students.find((student)=> student.id === Number(id))
    if(!student){
        res.status(404).json({
            message: " Students not found",
            success: false,
            data: "null"
        });
        return

    }

    res.status(200).json ({
        message: `student by ${id} fetched`,
        success : true,
        data: [{
            id: id,
            name: "Ally",
            email: "Ally@gmail.com"

        }]


    })
 })

 //* create students
 router.post("/students",(req, res)=>{

    const {name,email,password} = req.body;

    students.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        id: students.length +1,
    });
    
    res.status(201).json ({
        message: "students created",
        success: true,
        data: students[ students.length-1],
            
        
    })

 })
 //* update students by id

 router.put("/students/:id", (req, res)=>{
     
    // const id = req.params.id;
    const {id} = req.params;
    const { name, email, password} = req.body;
    const index = students.findindex((student=> student.id === Number(id)));

    if(index===-1){
        res.status(404).json({
            message: "student not found",
            success:false,
            data: null,
        });
        return 
        
        students[index]={
            ...students[index],
            name,
            email,
            password

        };
    }
    res.status(200).json({
        message: `student by id ${id} updated `,
        succes : true,
        data: students[index]
    })

 })

 //* delete students by id
 router.delete("/students/:id", (req, res)=>{
    // const id = req.params.id

    const {id} = req.params;
    const index = students.findindex((student)=> student.id === Number(id));

    if(index === -1){
        res.status(404).json ({
            message: "students not found",
            success: false,
            data:null,
        });
        return 

       students.splice(index, 1);
        res.status(200).json({
            message: "students deleted",
            success: true,
            data: null,
        })

       
    }
     })
     export default router;