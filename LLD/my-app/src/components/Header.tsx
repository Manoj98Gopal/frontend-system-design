import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-3 text-sm pr-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
