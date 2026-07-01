const subjects = [];

//* get all subject 

export const getall = (req,res)=>{
    const query = req.query;
    console.log(query)
    res.status(200).json({
        message:"all subjects",
        success: true,
        data: subjects
    })
}

//* get subject by id

export const getbyId= (req,res,next)=>{
    const{id}= req.params
    const subject = subjects.find((subject)=>subject.id===Number(id))
    if(!subject){
       
        next({
            message:"subject not found",
            statusCode: 404
        })
        return 
    }

    res.status(200).json({
        message: `subject by ${id} is fetched`,
        success: true,
        data: subject
    })
}

//* create subject by id 
export const create = (req,res)=>{
    const {name} = req.body
    subjects.push({
        name,
        createdAt: Date.now(),
        id: subjects.length+1
    })
    res.status(201).json({
        message: `subject is created`,
        success: true,
        data: subjects[subjects.length-1]
        

    })

}


//* update subject by id

export const update = (req,res)=>{
    const {id} = req.params;
    const{name} = req.body;
    const Index = subjects.findIndex((subject)=>subject.id===Number(id))
    if(Index===-1){
        res.status(400).json({
            message:"subject not found",
            success: false,
            data: null
        });
        return 
    }

    subjects[Index]=({
        ...subjects[Index],
        name,
       
    })

    res.status(200).json({
        message:`subject by ${id} is updated`,
        success: true,
        data: subjects[Index]
    })
}

//*delete subject by id
export const remove = (req,res)=>{
    const {id}= req.params
    const Index = subjects.findIndex((subject)=>subject.id===Number(id))
    
    if(Index===-1){
        res.status(400).json({
            message:"subject not found",
            success: false,
            data:null
        });
        return
    }
    subjects.splice(Index,1);
    res.status(200).json({
        message:`subject by id ${id} is deleted`,
        success:true,
    })
}