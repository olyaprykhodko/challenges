import './App.css';
import HomePage from './components/HomePage';
import TasksList from './components/TasksList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './components/TaskPage';
import AddTask from './components/AddTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:topic" element={<TasksList />} />
        <Route path="/tasks/:topic/:title" element={<TaskPage />} />
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;
