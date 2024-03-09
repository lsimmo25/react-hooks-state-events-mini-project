import React from "react";
import Task from "./Task.js"

function TaskList({ tasks, handleDeleteTask }) {

  const allTasks = tasks.map(task => {
    return <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleDeleteTask={handleDeleteTask}
    />
  })

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;