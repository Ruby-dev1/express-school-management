 const students = [];


//* get all students
 export const getall = (req,res)=>{
    const query = req.query
    console.log(query);
    res.status(200).json({
        message:"all students",
        success: true,
        data: students
    })
 }

 //* get student by id

 export const getbyId = (req,res)=>{
    const {id} = req.params
    const student = students.findIndex((student)=>student.id===Number(id));
    if(!student){
        res.status(400).json({
            message:"student not found",
            success: false,
            data: null
        });
        return;
    }

    res.status(200).json({
        message:`student ${id} is fetched`,
        success: true,
        data:student

        
    })
 }

 export const create = (req,res)=>{
    const {name, email,password}= req.body

    students.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        id:students.length +1

    });

        res.status(201).json({
            message: "student is created",
            success: true,
            data: students[students.length -1]
        })

    
 }
  //* update students by id
  
  export const update = (req,res)=>{
    const {id} = req.params;
    const {name,email,password}= req.body
    const Index = students.findIndex((student)=>student.id===Number(id))
    
    if(Index===-1){
        res.status(400).json({
            message:"student not found",
            success: false,
            data:null
        });

        return 
    }
    students[index]={
        ...students[index],
        name,
        email,
        password
    }

    res.status(200).json({
        message: `student by ${id} is updated`,
        success: true,
        data: students[index]
    })

  }

  //* delete students by id

  export const remove = (req,res)=>{
    const {id } = req.params;
    const Index = students.findIndex((student)=>student.id===Number(id))
    if(Index===-1){
        res.status(400).json({
            message:"student not found",
            success: false,
            data: null
        });
        return
    }

    students.splice(Index, 1);
    res.status(200).json({
        message:`student by ${id} is deleted`,
        success: true,
        data: null
    })

  }