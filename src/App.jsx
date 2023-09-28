import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth.context";
import { TaskProvider } from "./context/task.context";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPages";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import ProtectedRoutes from "./ProtectedRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskForm />} />
              <Route path="/tasks/:id" element={<TaskForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
