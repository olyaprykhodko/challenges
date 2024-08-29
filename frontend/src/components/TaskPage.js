import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Logo from './Logo';
import Back from './Back';
import Footer from './Footer';
import '../App.css';

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
      } catch (err) {
        setError(err.message);
      }
    };
    fetchFullTask();
  }, [topic, title]);

  const getSolutionHandler = () => {
    setSolution(tasks.solution);
  };

  const formatSolution = (solution) => {
    return solution.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split('\t').map((segment, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span>&emsp;</span>}
            {segment}
          </React.Fragment>
        ))}
        <br />
      </React.Fragment>
    ));
  };

  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="container">
        {tasks ? (
          <>
            <h3>{tasks.title}</h3>
            <h4>{tasks.description}</h4>
            <button onClick={getSolutionHandler} className="button">
              See the solution
            </button>
            {solution && (
              <section className="code-container">
                <div className="line-numbers">
                  {solution.split('\n').map((_, index) => (
                    <span key={index}>{index + 1}</span>
                  ))}
                </div>
                <pre>
                  <code>{formatSolution(solution)}</code>
                </pre>
              </section>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}

        <Back />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default TaskPage;
