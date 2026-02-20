
import {React, useState} from "react";

export default function TestPage(){

  const [count, setCount] = useState(0)
  const [name, setName] = useState('please fill in these fields')

  return (
    <>
        {/* React useState */}
        <p>The click count is: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>

        {/* get user text and inline event function */}
        <p>
            <p>Hi {name}</p>
            <input type="text" name="text" id="text" 
            onChange={(e)=>setName(e.target.value)}/>
        </p>
    </>
  )
}
