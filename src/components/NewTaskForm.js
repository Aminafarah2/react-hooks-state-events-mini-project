import React, { useState} from "react";

function NewTaskForm({categories}) {
  const [details,setDetails] =useState('')
  const [category,setCategory] =useState('')

  function handleDetails (event) {
    setDetails(event.target.value)
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text"  value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={category}>
          {categories.map(category => (
            <option key={category} >{category}</option>
          ))}  
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
