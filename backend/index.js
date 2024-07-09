const express = require('express');
const cors = require('cors')
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');



const app = express();
app.use(express.json());
app.use(cors());



app.get('/todos',async(req,res)=>{
 const allTodo = await todo.find({});
 res.json({allTodo});

});


//Data passed through post body in JSON array
// The safeParse() method in Zod is a way to validate data without throwing an error.
// It returns a result object that contains either the parsed data on success or an error object on failure .
app.post('/todos/create', async(req,res)=>{

    const userPayload = req.body;
    const parsedPayload = createTodo.safeParse(userPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg : 'Wrong inputs !!' , })
        return;
    }
    // else -> store the parsed data 
    // put in mongoDB
    //Always use body data to pass to data base parsed data are alterd dont use it to store in database 

    await todo.create({
        title : userPayload.title,
        description : userPayload.des,
        completed : false ,
    })
    res.json({msg : 'Todo created !!!'})  
});

 
app.put('/todos/mark', async(req,res)=>{

    const userPayload = req.body;
    const parsedPayload = updateTodo.safeParse(userPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg : 'Wrong inputs !!' ,})
        return;
    }
    // else update the parsed id
    //put in mongodb
   await todo.updateOne({ _id : req.body.id},{completed : true});
    res.json({msg : 'Todo marked as completed !!!'})
})

app.delete('/todos/delete', async(req,res)=>{

    const userPayload = req.body;
    const parsedPayload = updateTodo.safeParse(userPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg : 'Could not find !!' ,})
        return;
    }
    // else delete the parsed id
    //put in mongodb
   await todo.deleteOne({ _id : req.body.id});
    res.json({msg : 'Todo deleted !!!'})
})




app.use((err,req,res,next)=>{
   if(err) return  res.status(500).json({msg : 'Something went crazy !!!'})
})

app.listen(3000);

