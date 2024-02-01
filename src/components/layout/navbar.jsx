import { Link, NavLink } from "react-router-dom";
import logo from "@assets/logo.svg";
import homeIcon from "@assets/icon-nav-home.svg";
import movieIcon from "@assets/icon-nav-movies.svg";
import tvIcon from "@assets/icon-nav-tv-series.svg";
import bookmarkIcon from "@assets/icon-nav-bookmark.svg";
import profileIcon from "@assets/image-avatar.png";

export const Navbar = () => {
  return (
    <nav className="navTop">
      <Link to="/dashboard">
        <img
          src={logo}
          alt="entertainment logo"
        />
      </Link>

      <ul>
        <li>
          <NavLink
            to="/dashboard"
            end>
            <img
              src={homeIcon}
              alt="home icon"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/movies">
            <img
              src={movieIcon}
              alt="movie icon"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tv-series">
            <img
              src={tvIcon}
              alt="tv icon"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookmarks">
            <img
              src={bookmarkIcon}
              alt="bookmark icon"
            />
          </NavLink>
        </li>
      </ul>

      <button type="button">
        <img
          src={profileIcon}
          alt="profile icon"
        />
      </button>
    </nav>
  );
};
