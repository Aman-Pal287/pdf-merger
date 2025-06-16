import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Mainroutes from "./routes/Mainroutes";

import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/action/UserAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  });
  return (
    <div className="App">
      <Navbar />
      <Mainroutes />
    </div>
  );
}

export default App;
