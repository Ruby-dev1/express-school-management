 import express from "express"
 import{
    getall,
    getbyId,
    create,
    update,
    remove
 } from "../controllers/student.controller.js"

 const router = express.Router();


  //!CRUD STUDENTS 
 //* get all students

 router.get ("/", getall)

 //* get all students by id
 router.get("/:id", getbyId)

 //* create students
 router.post("/create", create)
 
 //* update students by id

 router.put("/:id",update)
 

 //* delete students by id
 router.delete("/:id", remove)

 
     export default router;