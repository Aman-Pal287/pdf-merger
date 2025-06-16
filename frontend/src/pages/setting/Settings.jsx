import { useDispatch, useSelector } from "react-redux";
import "./Setting.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { asyncLogoutUser } from "../../store/action/UserAction";

const Settings = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutUserHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  return user ? (
    <>
      <div className="setting-main">
        <div className="setting-main-right">
          <img src={user.dp} alt="" />
          <div className="setting-main-right-work">
            <div className="skill-logo">
              {" "}
              <span>work</span>
            </div>
            <div className="setting-main-right-work-btn">
              <h1>Soptify New York</h1>
              <p className="setting-main-right-work-btn-p ">primary</p>
            </div>
            <p>
              170 William Street <br /> New York , NY 10038.78.212.1{" "}
            </p>

            <div className="setting-main-right-work-btn">
              <h1>Metropolitan New York</h1>
              <p className="setting-main-right-work-btn-p ">secondary</p>
            </div>
            <p>
              525 E 68th Street <br /> New York , NY 10038.78.212.1{" "}
            </p>
          </div>
          <div className="setting-main-right-skill">
            <div className="skill-logo">
              {" "}
              <span>skill</span>
            </div>
            <p>Branding</p>
            <p>UI/UX</p>
            <p>Web-Design</p>
            <p>Packaging</p>
            <p>Print & Editorial</p>
          </div>
          <button
            type="button"
            onClick={LogoutUserHandler}
            className="logout-btn mb-3 text-gray-200 px-10 py-2 font-black bg-red-400 rounded"
          >
            Logout
          </button>
        </div>

        <div className="setting-main-left">
          <div className="setting-main-left-part1">
            <div className="setting-main-left-top w-full flex justify-between items-center">
              <div className=" top-header w-full flex ">
                <div className="setting-main-left-top-h1">
                  <h1 className="setting-main-left-h1">
                    {user.username ? user.username : ""}
                  </h1>
                  <p className="setting-main-left-p  text-blue-500">
                    product Designer
                  </p>
                </div>
                <div className="flex gap-1 items-center ">
                  <FaLocationDot />
                  <p className="">New York , NY</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <FaBookmark />
                <p> bookmark</p>
              </div>
            </div>
            <div className="setting-main-left-top-ranking">
              <p className="text-gray-500">Ranking</p>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">8,6</h1>
                <IoMdStar className="text-blue-400 text-2xl" />
                <IoMdStar className="text-blue-400 text-2xl" />
                <IoMdStar className="text-blue-400 text-2xl" />
                <IoMdStar className="text-blue-400 text-2xl" />
                <TiStarHalfOutline className="text-blue-400 text-2xl" />
              </div>
            </div>
            <div className="setting-main-left-top-btn">
              <button>
                {" "}
                <FaMessage /> Send Message{" "}
              </button>
              <button className="bg-blue-400 text-white rounded shadow-neutral-400">
                {" "}
                <FaCheck />
                contact{" "}
              </button>
              <button> Report user</button>
            </div>
          </div>

          <div className="setting-main-left-part2">
            <div className="setting-main-left-part2-nav ">
              <NavLink
                to="/user-profile/timeline"
                className={({ isActive }) =>
                  `setting-main-left-part2-nav-NavLink px-4 py-2   ${
                    isActive
                      ? "text-black  border-b-4 border-b-gray-500"
                      : "opacity-40"
                  }`
                }
              >
                <FaUser />
                Timeline
              </NavLink>

              <NavLink
                to="/user-profile"
                end
                className={({ isActive }) =>
                  `setting-main-left-part2-nav-NavLink px-4 py-2   ${
                    isActive
                      ? "text-black border-b-4 border-b-gray-500"
                      : "opacity-40"
                  }`
                }
              >
                <FaUser />
                About
              </NavLink>

              <NavLink
                to="/user-profile/change-detail"
                className={({ isActive }) =>
                  `setting-main-left-part2-nav-NavLink px-4 py-2   ${
                    isActive
                      ? "text-black border-b-4 border-b-gray-500"
                      : "opacity-40"
                  }`
                }
              >
                <FaUser />
                Change Details
              </NavLink>
            </div>
            <div className="setting-main-left-part2-outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    "loading"
  );
};

export default Settings;
