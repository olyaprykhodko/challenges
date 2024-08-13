import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <h1>Добавить новую задачу в базу</h1>
    </>
  );
}

export default AddTask;
