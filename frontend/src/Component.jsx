import { useState } from "react"

export function Component(){

        const [title, setTitle] = useState("");
        const [description , setDescription ] = useState("");

    return (
        <div>
            <input 

             type ="text"
             placeholder="title"
             onChange={(event)=>{
                    const value = event.target.value;
                    setTitle(value);
             }}>
            </input>

            <input 

            type="text" placeholder="description"
            onChange={(event)=>{
                    const value  = event.target.value;
                    setDescription(value);
            }}>
            </input><br></br>

            <button 

            onClick={()=>{
                //Inside  fetch(url,{method,body,headers})
                fetch("http://localhost:3000/todos/create" ,
                    {
                        method:"POST",
                        body: JSON.stringify({
                            title : title,
                            des : description,
                        }),
                        headers : {"Content-type":"application/json"},
                        
                    }

                )
                .then(async(res)=>{
                    const json = await res.json();
                    alert('TODO ADDED !!!');
                    
                })
            }}
            >Add todo</button><br></br>
            
        </div>
        
    )
}