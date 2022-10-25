import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "src/pages/auth/Signin/Signin";
import Signup from "src/pages/auth/Signup/Signup";
import ForgotPassword from "src/pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "src/pages/auth/ResetPassword/ResetPassword";
import Home from "src/pages/user/Home/Home";
import Kependudukan from "src/pages/user/Kependudukan/Kependudukan";
import Sosial from "src/pages/user/Sosial/Sosial";
import Bpjs from "src/pages/user/Bpjs/Bpjs";
import Dokumen from "src/pages/user/Dokumen/Dokumen";
import SuperAdminHome from "./pages/super-admin/SuperAdminHome/SuperAdminHome";
import SuperAdminUser from "./pages/super-admin/SuperAdminUser/SuperAdminUser";
import SuperAdminUserDetail from "./pages/super-admin/SuperAdminUserDetail/SuperAdminUserDetail";
import SuperAdminUserEdit from "./pages/super-admin/SuperAdminUserEdit/SuperAdminUserEdit";
import SuperAdminUserAdd from "./pages/super-admin/SuperAdminUserAdd/SuperAdminUserAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* user */}
        <Route path="/" element={<Home />} />
        <Route path="/kependudukan" element={<Kependudukan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/bpjs" element={<Bpjs />} />
        <Route path="/dokumen" element={<Dokumen />} />
        {/* super admin */}
        <Route path="/super-admin/home" element={<SuperAdminHome />} />
        <Route path="/super-admin/users" element={<SuperAdminUser />} />
        <Route
          path="/super-admin/users/detail"
          element={<SuperAdminUserDetail />}
        />
        <Route
          path="/super-admin/users/edit"
          element={<SuperAdminUserEdit />}
        />
        <Route path="/super-admin/users/add" element={<SuperAdminUserAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
