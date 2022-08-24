import React from "react";
import { useTasks } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
  const handleDone = (taskDone) => {
    console.log(taskDone);
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"} </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}> Edit</button>
      <button onClick={()=> handleDone(task.done)}>
        Toogle Task
      </button>
    </div>
  );
}

export default TaskCard;
