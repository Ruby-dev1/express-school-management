 import http from "http";
 import express from "express";
 import studentRoutes from "./routes/student.routes.js"
 import teacherRoutes from "./routes/teacher.routes.js"
 import subjectRoutes from "./routes/subject.routes.js"

 const app = express();

 const server = http.createServer(app);
  app.use(express.json())


  app.get("/",(req,res)=>{
   res.status(200).json({
      message:"homepage",
      success:true   })
  })




//  app.get("/",(req,res)=>{
//     res.send("<h1> SCHOOL--HOME PAGE")
//  })

//! using routes
app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)
app.use("/subjects", subjectRoutes)



    // res.json({
    //     message: `students by id ${id} deleted`,
    //     success: "true",
        
    //     data:[{
    //         id:id,
    //         name:"Kunal",
    //     email: "k@gmail.com",

    //     }]
    // })


 


 server.listen(8080, "localhost", ()=>{ 
   
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })