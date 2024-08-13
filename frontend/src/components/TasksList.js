import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function TasksList() {
  const { topic } = useParams();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`/api/tasks`, {
          params: { topic },
        });
        console.log(response.data);
        setTasks(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTasks();
  }, [topic]);

  return (
    <>
      <h3>Tasks for {topic}</h3>
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Link to={`/tasks/${task.topic}/${task.title}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
