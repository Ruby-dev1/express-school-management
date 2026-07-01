 import http from "http";
 import express from "express";
 import studentRoutes from "./routes/student.routes.js"
 import teacherRoutes from "./routes/teacher.routes.js"
 import subjectRoutes from "./routes/subject.routes.js"

 const app = express();

 const server = http.createServer(app);



  app.get("/",(req,res)=>{
   res.status(200).json({
      message:"homepage",
      success:true   })
  })


const middleware = (req,res,next)=>{
   console.log("middleware 1")
   next();
}

//  app.get("/",(req,res)=>{
//     res.send("<h1> SCHOOL--HOME PAGE")
//  })

//! using middlewares

app.use(middleware);
app.use((req,res,next)=>{
   console.log("middileware 2");
   req.student ={
      name:"John",
   }
   next();
})

app.use((req,res,next)=>{
   console.log("mid 3")
   console.log(req.user)

   if(req.student){
      next();

   } else{
      res.status(401).json({
         message:"unauthorized. Acess denied"
      });
   }

});


  app.use(express.json())


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

 app.use((err, req,res,next)=>{
   console.log("error handler");
   console.log(err)
   res.status(err?.statusCode ?? 500).json({
      message: err?.message ?? "something went wrong",
      success:false,
      data:null,
   })
 });