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
import SuperAdminKependudukan from "./pages/super-admin/SuperAdminKependudukan/SuperAdminKependudukan";
import SuperAdminKependudukanDetail from "./pages/super-admin/SuperAdminKependudukanDetail/SuperAdminKependudukanDetail";
import SuperAdminKependudukanEdit from "./pages/super-admin/SuperAdminKependudukanEdit/SuperAdminKependudukanEdit";
import SuperAdminKependudukanAdd from "./pages/super-admin/SuperAdminKependudukanAdd/SuperAdminKependudukanAdd";
import SuperAdminSosial from "./pages/super-admin/SuperAdminSosial/SuperAdminSosial";
import SuperAdminSosialDetail from "./pages/super-admin/SuperAdminSosialDetail/SuperAdminSosialDetail";
import SuperAdminSosialEdit from "./pages/super-admin/SuperAdminSosialEdit/SuperAdminSosialEdit";
import SuperAdminSosialAdd from "./pages/super-admin/SuperAdminSosialAdd/SuperAdminSosialAdd";

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
        <Route
          path="/super-admin/kependudukan"
          element={<SuperAdminKependudukan />}
        />
        <Route
          path="/super-admin/kependudukan/detail"
          element={<SuperAdminKependudukanDetail />}
        />
        <Route
          path="/super-admin/kependudukan/edit"
          element={<SuperAdminKependudukanEdit />}
        />
        <Route
          path="/super-admin/kependudukan/add"
          element={<SuperAdminKependudukanAdd />}
        />
        <Route path="/super-admin/sosial" element={<SuperAdminSosial />} />
        <Route
          path="/super-admin/sosial/detail"
          element={<SuperAdminSosialDetail />}
        />
        <Route
          path="/super-admin/sosial/edit"
          element={<SuperAdminSosialEdit />}
        />
        <Route
          path="/super-admin/sosial/add"
          element={<SuperAdminSosialAdd />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
