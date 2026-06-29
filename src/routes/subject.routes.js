import express from "express"
const router = express.Router()
import { getall, getbyId, create, update, remove} from "../controllers/subject.controller.js"

//!CRUD subjects

//*get all subject
 router.get ("/",getall)

 //* get subject by id 

 router.get("/:id",getbyId)

    
 //* create subject

 router.post("/subcreate",create)

 //* update subject

 router.put("/:id", update)

 //* delete subject
 router.delete("/:id",remove)

export default router;