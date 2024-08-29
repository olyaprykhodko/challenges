import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Logo from './Logo';
import Back from './Back';
import Footer from './Footer';

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
      <header>
        <Logo />
      </header>
      <main className="container">
        <div className="task-list">
          <h2>Tasks for {topic}</h2>
        </div>
        {error && <p>Error: {error}</p>}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <Link
                to={`/tasks/${task.topic}/${task.title}`}
                className="list-elem"
              >
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
        <Back />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default TasksList;
