import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <Link
        to="https://github.com/olyaprykhodko/challenges.git"
        className="footer-text"
        target="_blank"
      >
        Follow the project on GitHub
      </Link>
    </>
  );
}

export default Footer;
