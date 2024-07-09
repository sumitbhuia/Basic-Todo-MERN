import React, { useState } from 'react';

/*
        Structure
        ----------
         - Why seperate component ? -> Had a seperate state variable , so to minimize re-renders
         - Can be done inline , but will add to complexities
         - The CheckboxComponent fn() -> took {it} , available inside Todo.jsx -> map
         - The checked,setChecked are state variables
         - made a fuction that will activate when event change for the checkbox
         - this function could be done totally inline inside inChange - but to reduce complexities
         - The handleCheckboxChange can be inside onChange 

        

*/

export function CheckboxComponent({it}){
        const [checked, setChecked] = useState(it.completed);

       // When handleCheckboxChange is used inside onChange eventListener
       // The browser passes event object if something changes
       // Extractrequired change data , function on it

        const handleCheckboxChange = (event) => {
            const newChecked = event.target.checked;
            setChecked(newChecked);
    
            if (newChecked) {
                fetch("http://localhost:3000/todos/mark", {
                    method: "PUT",
                    body: JSON.stringify({ id: it._id }),
                    headers: { "Content-Type": "application/json" },
                })
                .then(async (res) => {
                    const json = await res.json();
                    // Alert if needed
                })
            }
        };
    
        return (
            <span>
                <input className='checkbox'
                    
                    type="checkbox"
                    // change logic inside onChange eventListener 
                    onChange={handleCheckboxChange}
                    // Checkbox check linked to state variable
                    checked={checked}
                />
            </span>
        );
    
    
    
    
}
