import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";

import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/action/UserAction";
import { useDispatch } from "react-redux";

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
