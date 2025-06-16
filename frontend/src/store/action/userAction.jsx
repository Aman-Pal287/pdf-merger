import axios from "../../api/axiosconfig";
import { loadUser, removeuser } from "../reducers/userSlice";

export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    toast.error("Logged Out!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/user/" + id, user);

    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};
export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/user/" + id);
    dispatch(asyncLogoutUser());
    toast.error("user deleted!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/user?email=${user.email}&password=${user.password} `
    );

    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user", user);
  } catch (error) {
    console.log(error);
  }
};
