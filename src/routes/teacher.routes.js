import express from "express"
const router = express.Router()
import { getall, getbyId, create, update , remove } from "../controllers/teacher.controller.js";




//! CRUD teachers

//* get all teachers 

 router.get("/",getall)


 //* get teachers by id 

 router.get("/:id",getbyId)

 //* create teachers id

 router.post("/teachers",create)

 //* update teachers by id 

 router.put("/:id", update)

 //* delete teachers by id 

 router.delete("/:id",remove)
 

export default router;