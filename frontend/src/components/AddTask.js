import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Back from './Back';
import Footer from './Footer';

function AddTask() {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/tasks', {
        title,
        description,
        solution,
        topic,
      });
      if (response.status === 201) {
        setSuccess(true);
        navigate(`/tasks/${topic}`);
      }
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="container">
        <h2>Please fill all fields of the form to add new task</h2>
        {error && <p>Error: {error}</p>}
        {success && <p>Task saved</p>}
        <form onSubmit={handleSubmit} className="main-container">
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Solution:</label>
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Topic:</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            Done
          </button>
        </form>
        <Back />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AddTask;
