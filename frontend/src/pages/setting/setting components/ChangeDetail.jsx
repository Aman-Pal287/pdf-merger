import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./ChangeDetail.scss"; // Assuming you have a CSS file for styling
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../../store/action/UserAction";

const ChangeDetail = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      dp: user?.dp,
      email: user?.email,
      password: user?.password,
    },
  });

  const UpdateUserHandler = (User) => {
    dispatch(asyncUpdateUser(user.id, User));
  };
  const DeleteUserHandler = () => {
    dispatch(asyncDeleteUser(user.id));
    navigate("/login");
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Change Details</h1>
      <p className="text-gray-600 mb-2">
        Here you can update your personal information, such as your name, email,
        and password.
      </p>
      <form onSubmit={handleSubmit(UpdateUserHandler)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            {...register("username")}
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="button"
          onClick={DeleteUserHandler}
          className="change-btn mb-3 text-gray-200 px-10 py-2 font-black bg-red-600 rounded"
        >
          Delete Account
        </button>

        <button
          type="submit"
          className="change-btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ChangeDetail;
