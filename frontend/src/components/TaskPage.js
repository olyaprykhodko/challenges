import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function TaskPage() {
  const { topic, title } = useParams();
  const [tasks, setTasks] = useState(null);
  const [solution, setSolution] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFullTask = async () => {
      try {
        const response = await axios.get(`/api/tasks`, {
          params: {
            topic,
            title,
          },
        });
        setTasks(response.data[0]);
        console.log(response.data.solution);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchFullTask();
  }, [topic, title]);

  const getSolutionHandler = async () => {
    setSolution(tasks.solution);
  };

  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
      {tasks ? (
        <>
          <h3>{tasks.title}</h3>
          <h4>{tasks.description}</h4>
          <button onClick={getSolutionHandler}>Посмотреть решение</button>
          {solution && (
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {solution.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line.split('\t').map((segment, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span>&emsp;</span>}
                      {segment}
                    </React.Fragment>
                  ))}
                  <br />
                </React.Fragment>
              ))}
            </pre>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default TaskPage;
