import React from "react"
import TodoItem from "./TodoItem"
import "./App.css"
import todosData from "./todosData.js"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todosData: todosData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState((previousState) => {
            const updatedTodos = previousState.todosData.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed : !todo.completed,
                }
            }
                return todo;
        })
        return {
            todosData: updatedTodos,
        }
    })
}
render() {
    const todoItems = this.state.todosData.map((item) => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    );
}

}

export default App