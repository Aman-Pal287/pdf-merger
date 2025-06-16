import { Route, Routes } from "react-router-dom";
import PdfMerger from "../components/PdfMerger";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Setting/Settings";
import ChangeDetail from "../pages/Setting/setting components/ChangeDetail";
import SettingAbout from "../pages/Setting/setting components/SettingAbout";
import SettingTimeline from "../pages/Setting/setting components/SettingTimeline";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merge-pdf" element={<PdfMerger />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/user-profile" element={<Settings />}>
        <Route path="timeline" element={<SettingTimeline />} />
        <Route path="change-detail" element={<ChangeDetail />} />
        <Route index element={<SettingAbout />} />
      </Route>
    </Routes>
  );
};

export default Mainroutes;
