
import {useState, React, useEffect} from "react"
import { Router, Route } from "react-router"
import "./CRUDTest.css"

export default function CRUDTest(){
    
    return(
        <div>
            {/* // make a form for the user to add stuff to the db */}
            <p>make a form for the user to add stuff to the db</p>
            <form id="messageForm">
                <input type="text" name="message" id="messageInput" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export function Create(){

    function DisplayMessages(e){
        console.log("Create submit pressed")
        // display on page
        let pageMessage = "Form submitted, contents: " + Number
        updatePageLog(pageMessage)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // setNumber(Number)
        // e.target.value = (Number)
        DisplayMessages(e)

        // send post req to my server
        async function fetchData() {

            const response = await fetch(
                "http://localhost:8080/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {Number: Number}),
            });

            const data = await response.json();
            console.log("Server response:", data);
        }
        fetchData();
    }

    const [PageLog, updatePageLog] = useState("There is no message yet")
    // const [Create, updateCreate] = useState("")
    const [Number, setNumber] = useState(0)
    
    return(
        <div className="CRUD CREATE">
            {/* // make a form for the user to add stuff to the db */}
            <p>make a form for the user to add stuff to the db</p>
            <p>Log: {PageLog}</p>
            {/* <p>Create msg: {Create}</p> */}
            <p>Number: {Number}</p>
            <form id="messageForm" onSubmit={handleSubmit}>
                <label htmlFor="message">Input the number you like here : </label>
                <input
                    type="number" name="message" id="messageInput" onChange={
                        (e)=>(setNumber(e.target.value))
                    }/>
                <button type="submit">Send</button>
            </form>
            read()
            <Read />
        </div>
    );
}

function read(){
    const [items, setItems] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            console.log("I aim to fetch data yo!")
            const response = await fetch(
                "http://localhost:8080/read"
            );
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);
}

export function Read() {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            console.log("I aim to fetch data yo!")
            const response = await fetch(
                "http://localhost:8080/read"
            );
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    async function fetchData(){
        const response = await fetch(
            "http://localhost:8080/read"
        );
        const data = await response.json();
        setItems(data);
    }

    return (
        <div>
            <button onClick={()=>{fetchData()}}>Click to update list</button>
            <h1>Items</h1>
            <ul>
                {/* get the last 5 items in table */}
                {items.slice(-6,-1).map((item)=> (
                    // <li key={item.id}>{item.id}: {item.number}</li>
                    <li key={item.id}>{item.id}:{item.number}</li>
                ))}
            </ul>
        </div>
    );
}


