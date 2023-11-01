import React from "react";

function Task({task, handleDelete}) {

  function handleDeleteTask() {
    handleDelete(task)
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;