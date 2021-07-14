import React from 'react';

// Functional Component w/ destructoring props
const TodoList = (props) => {
    const {todo, index, checklist, setChecklist} = props;
    
    // Handles completed task
    const isComplete = e => {
        checklist[index].isDone = !checklist[index].isDone;
        setChecklist([...checklist]);         
    };
    
    // Handles deleting a Task (delete button)
    const deleteTask = () => {
        setChecklist(() => {
            return checklist.filter(todo => checklist.indexOf(todo) !== index);
        });
    }
    
    return(
        <div>
            {/* <br/> */}
            {/* Style for line through task when completed */}
            <h3 style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.taskName}</h3>            
            <div>
                <label htmlFor="checkBox">Completed Task</label>
                {/* Check box for completing task */}
                <input onChange={isComplete} type='checkbox' checked={todo.isDone}/>
                {/* Button for deleting task  */}
                <button onClick={deleteTask}>Delete Task</button> 
            </div>
        </div>
    );
}
export default TodoList;