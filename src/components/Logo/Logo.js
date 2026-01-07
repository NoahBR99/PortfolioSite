import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ onClick }) => (
  <Link className="logo" to="/" onClick={onClick}>
    Noah Blake
  </Link>
);

export default Logo;
