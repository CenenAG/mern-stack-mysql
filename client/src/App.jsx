import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import { TaskContextProvider } from "./context/TaskProvider.jsx";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} /> // element is a component
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
