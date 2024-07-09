const zod =require('zod')

/* 
    {
    title : String 
    des : String
    }

    {
    id: String
    }
    
*/

const createTodo = zod.object({
    title : zod.string().min(1),
    des: zod.string().min(1)

})
const updateTodo = zod.object({
    id:zod.string().min(1),
});

module.exports ={
    createTodo : createTodo,
    updateTodo : updateTodo,
}