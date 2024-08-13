import TopicList from './TopicList';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to="/addtask">Добавить новую задачу</Link>
      <TopicList />
    </div>
  );
}

export default HomePage;
