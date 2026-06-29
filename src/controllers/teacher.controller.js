const teachers = [];

//*get all teachers

export const getall = (req,res)=>{
    const query = req.query
    console.log(query);
    res.status(200).json({
        message: "all teachers",
        success: true,
        data: teachers
    })
}
//* get teacher by id

export const getbyId = (req,res)=>{
    const {id} = req.params
    const teacher = teachers.findIndex((teacher)=>teacher.id===Number(id));
    if(!teacher){
        res.status(400).json({
            message: "teacher not found",
            success: false,
            data: null
        });
        return 
    }
    res.status(200).json({
        message:`teacher by id ${id} is fetched`,
        success: true,
        data:teacher

    })
}

//* create teacher 

export const create = (req,res)=>{
    const {name,email,password} = req.body

    teachers.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        id:teachers.length +1
    })

    res.status(201).json({
        message:"teacher is created",
        success: true,
        data: teachers[teachers.length-1]
    })
}

//* update teacher by id 

export const update = (req,res)=>{
    const {id} = req.params;
    const {name, email, password}= req.query;
    const Index = teachers.findIndex((teacher)=>teacher.id===Number(id))
    if(Index===-1){
        res.status(400).json({
            message: "teacher not found",
            success: false,
            data: null
        });

        return 
    }
    teachers[index]={
        ...teachers[index],
        name,
        email,
        password
    }

    res.status(200).json({
        message:`teacher by id ${id} is updated`,
        success: true,
        data:teachers[index]
    })

}


//* delete teacher by id 

export const remove = (req,res)=>{
    const {id} = req.params
    const Index = teachers.findIndex((teacher)=>teacher.id===Number(id))

    if(Index===-1){
        res.status(400).json({
            message: "teacher not found",
            success: false,
            data: null
        });
        return 
    }

    teachers.splice(Index, 1);
    res.status(200).json({
        message: `delete teacher by id ${id}`,
        success: true,
        data: null
    })

    
}

