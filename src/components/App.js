import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
console.log("test")

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  const handleFilterChange = (filter) => {
    console.log(filter)
    let filteredTasks;

    if (filter && filter !== 'All') {
      filteredTasks = TASKS.filter(task => task.category === filter)
    } else {
      filteredTasks = TASKS
    }

    setTasks(filteredTasks)
  }

  const handleDeleteTask = (text) => {
    const filteredTasks = tasks.filter(task => task.text !== text)
    setTasks(filteredTasks)

  }

  const handleAddNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onFilterChange={handleFilterChange}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddNewTask}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;