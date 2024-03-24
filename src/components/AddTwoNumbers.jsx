import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function AddTwoNumbers() {
 
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [sum, setSum] = useState(0)
  
    const handleAdd = () =>{
        setSum(input1+input2)
    }

    return(
    <div >
        <h2>Adding Two Numbers</h2>
        <input
        value = {input1}
        onChange={(e) => setInput1(+e.target.value)}
        type='number'
        placeholder='First Number'
        />
        <br/>
        <input
        value = {input2}
        onChange={(e) => setInput2(+e.target.value)}
        type='number'
        placeholder='Second Number'

        />
        <br/>
        <Button variant='outline-dark' onClick={()=>handleAdd()} >Add 2 numbers</Button>
        <p>Total : {sum}</p>
    </div>
    )
    
}

export default AddTwoNumbers