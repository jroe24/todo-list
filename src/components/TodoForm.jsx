import React from 'react';

// Functional Component w/ destructoring props
const TodoForm = (props) => {
    const {checklist, setChecklist} = props;
    let todo = {
        taskName: "",
        isDone: false
    };
    
    // Handles input for task
    const onChangeList = (e) => {
        todo.taskName = e.target.value;
    }

    // Handles click action for add task
    const onClick = (e) => {
        setChecklist([...checklist, todo]);
        e.target.value = "";
    }

    return(
        <div >
            <h3>Enter Your Task Below</h3>
            <input onChange={onChangeList} type="text" name='task'/>
            <button onClick={onClick}>Add Task</button>
        </div>
    )
}
export default TodoForm;