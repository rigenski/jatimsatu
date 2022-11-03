import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "src/pages/auth/Signin/Signin";
import Signup from "src/pages/auth/Signup/Signup";
import ResetPassword from "src/pages/auth/ResetPassword/ResetPassword";
import Home from "src/pages/user/Home/Home";
import Kependudukan from "src/pages/user/Kependudukan/Kependudukan";
import Sosial from "src/pages/user/Sosial/Sosial";
import Dokumen from "src/pages/user/Dokumen/Dokumen";
import SuperAdminHome from "src/pages/super-admin/SuperAdminHome/SuperAdminHome";
import SuperAdminUser from "src/pages/super-admin/SuperAdminUser/SuperAdminUser";
import SuperAdminUserDetail from "src/pages/super-admin/SuperAdminUserDetail/SuperAdminUserDetail";
import SuperAdminUserEdit from "src/pages/super-admin/SuperAdminUserEdit/SuperAdminUserEdit";
import SuperAdminUserAdd from "src/pages/super-admin/SuperAdminUserAdd/SuperAdminUserAdd";
import SuperAdminKependudukan from "src/pages/super-admin/SuperAdminKependudukan/SuperAdminKependudukan";
import SuperAdminKependudukanDetail from "src/pages/super-admin/SuperAdminKependudukanDetail/SuperAdminKependudukanDetail";
import SuperAdminKependudukanEdit from "src/pages/super-admin/SuperAdminKependudukanEdit/SuperAdminKependudukanEdit";
import SuperAdminSosial from "src/pages/super-admin/SuperAdminSosial/SuperAdminSosial";
import SuperAdminSosialDetail from "src/pages/super-admin/SuperAdminSosialDetail/SuperAdminSosialDetail";
import SuperAdminSosialEdit from "src/pages/super-admin/SuperAdminSosialEdit/SuperAdminSosialEdit";
import SuperAdminKesehatan from "src/pages/super-admin/SuperAdminKesehatan/SuperAdminKesehatan";
import SuperAdminDesaAdd from "src/pages/super-admin/SuperAdminDesaAdd/SuperAdminDesaAdd";
import SuperAdminKecamatanAdd from "src/pages/super-admin/SuperAdminKecamatanAdd/SuperAdminKecamatanAdd";
import SuperAdminDesa from "src/pages/super-admin/SuperAdminDesa/SuperAdminDesa";
import SuperAdminKecamatan from "src/pages/super-admin/SuperAdminKecamatan/SuperAdminKecamatan";
import LayananDetail from "src/pages/user/LayananDetail/LayananDetail";
import Bpjs from "src/components/Sosial/Bpjs/Bpjs";
import DaftarKTP from "src/components/Kependudukan/DaftarKTP/DaftarKTP";
import ESignature from "src/components/Kependudukan/ESignature/ESignature";
import Bansos from "./components/Sosial/Bansos/Bansos";
import BantuanLangsungTunai from "./components/Sosial/BantuanLangsungTunai/BantuanLangsungTunai";
import KartuIndonesiaPintar from "./components/Sosial/KartuIndonesiaPintar/KartuIndonesiaPintar";
import KartuIndonesiaSehat from "./components/Sosial/KartuIndonesiaSehat/KartuIndonesiaSehat";
import KartuPrakerja from "./components/Sosial/KartuPrakerja/KartuPrakerja";
import BantuanBencana from "./components/Sosial/BantuanBencana/BantuanBencana";
import PenyaluranSubsidi from "./components/Sosial/PenyaluranSubsidi/PenyaluranSubsidi";
import Pengaduan from "./components/Sosial/Pengaduan/KartuPrakerja";
import PerubahanStatus from "./components/Kependudukan/PerubahanStatus/PerubahanStatus";
import SuratKeterangan from "./components/Kependudukan/SuratKeterangan/SuratKeterangan";
import AdminHome from "./pages/admin/AdminHome/AdminHome";
import AdminUser from "./pages/admin/AdminUser/AdminUser";
import AdminUserDetail from "./pages/admin/AdminUserDetail/AdminUserDetail";
import AdminKependudukanDetail from "./pages/admin/AdminKependudukanDetail/AdminKependudukanDetail";
import AdminKependudukanEdit from "./pages/admin/AdminKependudukanEdit/AdminKependudukanEdit";
import AdminSosial from "./pages/admin/AdminSosial/AdminSosial";
import AdminSosialDetail from "./pages/admin/AdminSosialDetail/AdminSosialDetail";
import AdminSosialEdit from "./pages/admin/AdminSosialEdit/AdminSosialEdit";
import AdminKesehatan from "./pages/admin/AdminKesehatan/AdminKesehatan";
import AdminKecamatan from "./pages/admin/AdminKecamatan/AdminKecamatan";
import AdminKecamatanAdd from "./pages/admin/AdminKecamatanAdd/AdminKecamatanAdd";
import AdminDesa from "./pages/admin/AdminDesa/AdminDesa";
import AdminDesaAdd from "./pages/admin/AdminDesaAdd/AdminDesaAdd";
import AdminUserEdit from "./pages/admin/AdminUserEdit/AdminUserEdit";
import AdminUserAdd from "./pages/admin/AdminUserAdd/AdminUserAdd";
import AdminKependudukan from "./pages/admin/AdminKependudukan/AdminKependudukan";
import SuratJalan from "./components/Kependudukan/SuratJalan/SuratJalan";
import KartuKeluarga from "./components/Kependudukan/KartuKeluarga/KartuKeluarga";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AuthRoute from "./middleware/routes/AuthRoute";
import ProtectedRoute from "./middleware/routes/ProtectedRoute";
import { checkToken } from "./store/auth/authAction";
import { authLogout } from "./store/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  const { authToken } = useSelector((state) => state.auth);

  const handleAuth = async () => {
    if (authToken) {
      await dispatch(checkToken());
    } else {
      await dispatch(authLogout());
    }
  };

  useEffect(() => {
    handleAuth();
  }, [authToken]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route element={<AuthRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signin/:token" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>
          {/* user */}
          <Route element={<ProtectedRoute role="PENDUDUK" />}>
            <Route path="/" element={<Home />} />
            <Route path="/kependudukan" element={<Kependudukan />} />
            <Route path="/sosial" element={<Sosial />} />
            <Route path="/dokumen" element={<Dokumen />} />
            <Route path="/dokumen/:cursor" element={<Dokumen />} />
            {/* kependudukan */}
            <Route
              path="/daftar-ktp"
              element={
                <LayananDetail>
                  <DaftarKTP />
                </LayananDetail>
              }
            />
            <Route
              path="/surat-jalan"
              element={
                <LayananDetail>
                  <SuratJalan />
                </LayananDetail>
              }
            />
            <Route
              path="/surat-keterangan"
              element={
                <LayananDetail>
                  <SuratKeterangan />
                </LayananDetail>
              }
            />
            <Route
              path="/kartu-keluarga"
              element={
                <LayananDetail>
                  <KartuKeluarga />
                </LayananDetail>
              }
            />
            <Route
              path="/perubahan-status"
              element={
                <LayananDetail>
                  <PerubahanStatus />
                </LayananDetail>
              }
            />
            <Route
              path="/e-signature"
              element={
                <LayananDetail>
                  <ESignature />
                </LayananDetail>
              }
            />
            {/* sosial */}
            <Route
              path="/bansos"
              element={
                <LayananDetail>
                  <Bansos />
                </LayananDetail>
              }
            />
            <Route
              path="/bantuan-langsung-tunai"
              element={
                <LayananDetail>
                  <BantuanLangsungTunai />
                </LayananDetail>
              }
            />
            <Route
              path="/kartu-indonesia-pintar"
              element={
                <LayananDetail>
                  <KartuIndonesiaPintar />
                </LayananDetail>
              }
            />
            <Route
              path="/kartu-indonesia-sehat"
              element={
                <LayananDetail>
                  <KartuIndonesiaSehat />
                </LayananDetail>
              }
            />
            <Route
              path="/bpjs"
              element={
                <LayananDetail>
                  <Bpjs />
                </LayananDetail>
              }
            />
            <Route
              path="/kartu-prakerja"
              element={
                <LayananDetail>
                  <KartuPrakerja />
                </LayananDetail>
              }
            />
            <Route
              path="/bantuan-bencana"
              element={
                <LayananDetail>
                  <BantuanBencana />
                </LayananDetail>
              }
            />
            <Route
              path="/penyaluran-subsidi"
              element={
                <LayananDetail>
                  <PenyaluranSubsidi />
                </LayananDetail>
              }
            />
            <Route
              path="/pengaduan"
              element={
                <LayananDetail>
                  <Pengaduan />
                </LayananDetail>
              }
            />
          </Route>

          <Route element={<ProtectedRoute role="SUPER_ADMIN" />}>
            {/* super admin */}
            <Route path="/super-admin" element={<SuperAdminHome />} />
            <Route path="/super-admin/users" element={<SuperAdminUser />} />
            <Route
              path="/super-admin/users/:id"
              element={<SuperAdminUserDetail />}
            />
            <Route
              path="/super-admin/users/:id/edit"
              element={<SuperAdminUserEdit />}
            />
            <Route
              path="/super-admin/users/add"
              element={<SuperAdminUserAdd />}
            />
            <Route
              path="/super-admin/kependudukan"
              element={<SuperAdminKependudukan />}
            />
            <Route
              path="/super-admin/kependudukan/:id"
              element={<SuperAdminKependudukanDetail />}
            />
            <Route
              path="/super-admin/kependudukan/:id/edit"
              element={<SuperAdminKependudukanEdit />}
            />
            <Route path="/super-admin/sosial" element={<SuperAdminSosial />} />
            <Route
              path="/super-admin/sosial/:id"
              element={<SuperAdminSosialDetail />}
            />
            <Route
              path="/super-admin/sosial/:id/edit"
              element={<SuperAdminSosialEdit />}
            />
            <Route
              path="/super-admin/kesehatan"
              element={<SuperAdminKesehatan />}
            />
            <Route
              path="/super-admin/kecamatan"
              element={<SuperAdminKecamatan />}
            />
            <Route
              path="/super-admin/kecamatan/add"
              element={<SuperAdminKecamatanAdd />}
            />
            <Route path="/super-admin/desa" element={<SuperAdminDesa />} />
            <Route
              path="/super-admin/desa/add"
              element={<SuperAdminDesaAdd />}
            />
          </Route>

          <Route element={<ProtectedRoute role="ADMIN" />}>
            {/* super admin */}
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/users" element={<AdminUser />} />
            <Route path="/admin/users/detail" element={<AdminUserDetail />} />
            <Route path="/admin/users/edit" element={<AdminUserEdit />} />
            <Route path="/admin/users/add" element={<AdminUserAdd />} />
            <Route path="/admin/kependudukan" element={<AdminKependudukan />} />
            <Route
              path="/admin/kependudukan/detail"
              element={<AdminKependudukanDetail />}
            />
            <Route
              path="/admin/kependudukan/edit"
              element={<AdminKependudukanEdit />}
            />
            <Route path="/admin/sosial" element={<AdminSosial />} />
            <Route
              path="/admin/sosial/detail"
              element={<AdminSosialDetail />}
            />
            <Route path="/admin/sosial/edit" element={<AdminSosialEdit />} />
            <Route path="/admin/kesehatan" element={<AdminKesehatan />} />
            <Route path="/admin/kecamatan" element={<AdminKecamatan />} />
            <Route
              path="/admin/kecamatan/add"
              element={<AdminKecamatanAdd />}
            />
            <Route path="/admin/desa" element={<AdminDesa />} />
            <Route path="/admin/desa/add" element={<AdminDesaAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
