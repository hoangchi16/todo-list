import React from "react";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFill1CircleFill, BsFillCheckSquareFill, BsSquareFill, BsTrashFill } from "react-icons/bs";

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

    const handleTaskStatus = async (id) => {
        try {
            // console.log("Attempt to send");
            const result = await axios.put('http://localhost:3001/updateStatus/' + id);
            // setTodos(result.data);
            // location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div  className='Home-Display'>
            <h1>To-do List</h1>
            <CreateTask />
            <br />
            {
                todos.length === 0 
                ? <h2>No record</h2> 
                : todos.map((item) => (
                    <div className="taskDiv" key={item.task} onClick={() => handleTaskStatus(item._id)}>
                        <div className="checkbox">
                            {item.done === true 
                            ? <BsFillCheckSquareFill className="task-icon"></BsFillCheckSquareFill>
                            : <BsSquareFill className="task-icon"></BsSquareFill>
                            }
                            <p className={item.done === true ? "task-text-done" : "task-text"}>{item.task}</p>
                        </div>
                        <div>
                            <span><BsTrashFill className="task-icon"></BsTrashFill></span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;