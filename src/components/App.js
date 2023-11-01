import React, { useState } from "react";
import "../index.css";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";
const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

  };

  
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

function App() {
  const [task, setTask] = useState("");
  const [category,setcategory]=useState('')
  const [details,setDetails]=useState('')
  const [addStyle, setAddStyle] = useState("");
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  function applyStyle(categoryValue) {
    console.log(categoryValue);
    if (categoryValue === CATEGORIES) {
      setAddStyle("selected");
    }
  }
  function updateTasks(newArray) {
    console.log(newArray);
    setTask(newArray);
  }
  return (
    <div className="App">

      <h2>My tasks</h2>
      <CategoryFilter
        listCategoris={CATEGORIES}
        applyStyle={applyStyle}
        addStyle={addStyle}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        listOfCategories={CATEGORIES}
        category={category}
        details={details}
        categories={categories}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={TASKS} onUpdateList={updateTasks} />
      <TaskList tasks={filteredTasks} onTaskDelete={setTasks} />
    </div>
  );
}
};

export default App;