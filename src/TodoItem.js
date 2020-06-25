import React from "react"


function TodoItem(){
    const styles = {
        backgroundColor: "green",
        color: "black",
    }
    return(
        <div className="todo-item">
            <p>Check this</p>
            <input style={styles} type="checkbox"></input>
        </div>
        

    );
}

export default TodoItem