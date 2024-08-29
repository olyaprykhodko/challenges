import React from 'react';
import TopicList from './TopicList';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Footer from './Footer';
import '../App.css';

function HomePage() {
  return (
    <div>
      <header>
        <Logo />
      </header>

      <main>
        <div className="container">
          <section className="tasks-list">
            <h2>
              Welcome to the repository with popular JavaScript tasks and their
              solutions
            </h2>
            <h4>
              💡 To practice your knowledge, choose a topic and then choose a
              task from the list. You can try to solve the task yourself in your
              IDE and then compare your solution:
            </h4>

            <TopicList />
          </section>
          <section className="add-new-task">
            <h4>
              📒 Or you can <b>add your task</b> to the repository
            </h4>
            <Link to="/addtask" className="add-task-btn">
              Add new task ➔
            </Link>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
