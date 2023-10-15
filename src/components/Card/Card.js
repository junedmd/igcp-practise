import React from "react";
import "./Card.css";

export default function Card({ name, description, priority, deleteTask, updateInput }) {
    return (
        <>
            <div className="card-box">
                <h4> name :{name}</h4>
                <p> description:{description}</p>
                <p> priority :{priority}</p>
                <span className="bin-task" onClick={() => {
                    deleteTask(name)
                }} > 🗑️</span>
                <span className="pen-task" onClick={() => {
                   updateInput(name)
                }}> 🖊️</span>

            </div>

        </>

    )
}