import React from "react";

function Task({text, category, handleDeleteTask}) {
  const handleDelete = (e) => {
    e.preventDefault()
    handleDeleteTask(text)
  }

  // const taskName = singleTask.text
  // const taskCategory  = singleTask.category

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;