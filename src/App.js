import React, { useState } from "react";
import Add from "./Components/Todo/Add";
import List from "./Components/Todo/List";
import Counter from "./Components/Counter";
const App = () => {
    const [list, setList] = useState(["item1", "item2"]);
    const addItem = (item) => {
        //Concatination tab bch nzidou el jdid eli howa el item
        //[item1,item2,input]
        // setList(list.contact(item)););
        setList([...list, item]);
    };
    console.log(list);
    const deleteItem = (index) => {
        setList(list.filter((_, i) => i !== index));
    };
    return (
        <div>
            <Add addItem={addItem} />
            <List list={list} deleteItem={deleteItem} />
         
        </div>
    );
};

export default App;
