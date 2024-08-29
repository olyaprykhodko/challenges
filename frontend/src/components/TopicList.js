import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/api/topics');
        setTopics(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    console.log(fetchTopics());
    fetchTopics();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="task-list">
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <Link to={`/tasks/${topic}`} className="list-elem">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
