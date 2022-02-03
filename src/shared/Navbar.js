import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="topnav">
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-story">Add new feature</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
      </ul>
    </div>
  );
};
