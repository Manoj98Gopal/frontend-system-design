import { Link } from "react-router-dom";
import type { Languages } from "../utils/DataConfig";
import type { Dispatch, SetStateAction } from "react";


type HeaderProps = {
  language:keyof Languages,
  setLanguage: Dispatch<SetStateAction<keyof Languages>>;
}

const Header = ({ language, setLanguage }:HeaderProps) => {
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
            <Link to="/imageSlider">Image Slider</Link>
          </li>
          <li>
            <Link to="/nestedComment">Nested Comment</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
           <li>
            <Link to="/accordion">Accordion</Link>
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

          <select
            defaultValue={language}
            className="bg-black"
            onChange={e => {
              setLanguage(e.target.value as keyof Languages);
            }}
          >
            <option value="en">English</option>
            <option value="ka">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="fr">French</option>
            <option value="ru">Russia</option>
          </select>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
