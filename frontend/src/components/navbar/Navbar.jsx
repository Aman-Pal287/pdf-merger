import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const user = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    // Apply theme class to body
    document.body.setAttribute("data-theme", theme);

    // Optionally save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="mb-10 navbar flex gap-10 justify-center items-center">
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink to="/merge-pdf" className="navbar-link">
            Merge Pdf
          </NavLink>

          <NavLink to="/user-profile" className="navbar-link">
            Settings
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" className="navbar-link">
          Login
        </NavLink>
      )}

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default Navbar;
