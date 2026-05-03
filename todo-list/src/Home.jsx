import React from "react";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('http://localhost:3001/getTask');
                setTodos(result.data);
                // console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div  className='Home-Display'>
            <h1>To-do List</h1>
            <CreateTask />
            
            {
                todos.length === 0 
                ? <h2>No record</h2> 
                : todos.map((item) => (
                    <div key={item.task}> {item.task} </div>
                ))
            }
        </div>
    );
}

export default Home;