import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiFilePlus,
  FiSettings,
  FiLogIn,
  FiMoon,
  FiSun,
} from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const user = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Custom class for NavLink based on isActive
  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100"
        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
    }`;

  return (
    <nav className="mb-15 sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={getNavLinkClass}>
              <FiHome className="text-lg" />
              <span>Home</span>
            </NavLink>

            {user ? (
              <>
                <NavLink to="/merge-pdf" className={getNavLinkClass}>
                  <FiFilePlus className="text-lg" />
                  <span>Merge PDF</span>
                </NavLink>

                <NavLink to="/user-profile" className={getNavLinkClass}>
                  <FiSettings className="text-lg" />
                  <span>Settings</span>
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" className={getNavLinkClass}>
                <FiLogIn className="text-lg" />
                <span>Login</span>
              </NavLink>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [theme, setTheme] = useState("light");

//   const user = useSelector((state) => state.userReducer.users);

//   useEffect(() => {
//     // Apply theme class to body
//     document.body.setAttribute("data-theme", theme);

//     // Optionally save to localStorage
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="mb-10 navbar flex gap-10 justify-center items-center">
//       <NavLink to="/" className="navbar-link">
//         Home
//       </NavLink>

//       {user ? (
//         <>
//           <NavLink to="/merge-pdf" className="navbar-link">
//             Merge Pdf
//           </NavLink>

//           <NavLink to="/user-profile" className="navbar-link">
//             Settings
//           </NavLink>
//         </>
//       ) : (
//         <NavLink to="/login" className="navbar-link">
//           Login
//         </NavLink>
//       )}

//       <button className="theme-toggle" onClick={toggleTheme}>
//         {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//       </button>
//     </div>
//   );
// };

// export default Navbar;
