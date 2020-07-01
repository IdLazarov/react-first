import React from "react"
import TodoItem from "./TodoItem"
import "./App.css"
import todosData from "./todosData.js"

function App(){
    const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item}/>)
    return(
        <div className="todo-list">
            {todoItems}
        </div>
        
    );
}

export default App