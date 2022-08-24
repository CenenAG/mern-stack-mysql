import axios from "axios";

export const getTasksRequest = async (task) => {
  return await axios.get("http://localhost:4000/tasks", task);
};

export const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export const deleteTaskRequest = async (id) => {
  console.log(id + " deleted");
  console.log(`http://localhost:4000/task/${id}`);
  return await axios.delete(`http://localhost:4000/task/${id}`);
};

export const updateTaskRequest = async (id, newFields) => {
  return await axios.put(`http://localhost:4000/task/${id}`, newFields);
};

export const getTaskRequest = async (id) => {
    return await axios.get(`http://localhost:4000/task/${id}`);
  };