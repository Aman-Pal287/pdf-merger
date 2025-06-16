import { useSelector } from "react-redux";
import "./SettingAbout.scss";

const SettingAbout = () => {
  const user = useSelector((state) => state.userReducer.users);
  return (
    <div className="setting-main-left-part2-outlet-about-main flex flex-col gap-10 ">
      <section className="setting-main-left-part2-outlet-about-contact">
        <h1>Contact Information</h1>
        <p className="flex justify-between ">
          <span>Phone:</span>
          <span className="text-blue-400 ">+91 8412541561</span>
        </p>
        <p className="flex justify-between ">
          <span>Addreas:</span>
          <span className="">Karol Bagh , New Delhi</span>
        </p>
        <p className="flex justify-between ">
          <span>Email:</span>
          <span className="text-blue-400 ">{user.email}</span>
        </p>
        {user.isAdmin && (
          <p>
            <span>Admin Status:</span>
            <span className="text-blue-400 ">{user.isAdmin ? "You are Admin" : "You are not admin"}</span>
          </p>
        )}
      </section>

      <section className="setting-main-left-part2-outlet-about-basicInformation">
        <h1>Basic Information</h1>
        <p className="flex justify-between ">
          <span>User Name:</span>
          <span className="">{user.username}</span>
        </p>
        <p className="flex justify-between ">
          <span>Date of Birth:</span>
          <span className="">01/01/1990</span>
        </p>
        <p className="flex justify-between ">
          <span>Gender:</span>
          <span className="">Male</span>
        </p>
      </section>
    </div>
  );
};

export default SettingAbout;
