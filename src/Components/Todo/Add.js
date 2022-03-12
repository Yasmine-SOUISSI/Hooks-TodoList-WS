import React from "react";
import { useState } from "react";

const Add = ({ addItem }) => {
    const [input, setInput] = useState("");
    console.log(input);
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <form id="myDIV">
            <h2 className="title" style={{ margin: "5px" }}>
                My To Do List
            </h2>
            <input
                value={input}
                onChange={handleChange}
                id="myInput"
                placeholder="Add To Do..."
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addItem(input);
                    setInput("");
                }}
            >
                Add
            </button>
        </form>
    );
};

export default Add;

// steps:
// 1- save the value of the input in a state done
// 2-when i click to the add button send the item  to app=>
// NB ( i recieve that function from app as props)
// 3 - when i recieved in the app component i added in the list
