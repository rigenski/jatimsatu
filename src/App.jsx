import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "src/pages/auth/Signin/Signin";
import Signup from "src/pages/auth/Signup/Signup";
import ResetPassword from "src/pages/auth/ResetPassword/ResetPassword";
import Home from "src/pages/user/Home/Home";
import Kependudukan from "src/pages/user/Kependudukan/Kependudukan";
import Sosial from "src/pages/user/Sosial/Sosial";
import Dokumen from "src/pages/user/Dokumen/Dokumen";
import SuperAdminHome from "./pages/super-admin/SuperAdminHome/SuperAdminHome";
import SuperAdminUser from "./pages/super-admin/SuperAdminUser/SuperAdminUser";
import SuperAdminUserDetail from "./pages/super-admin/SuperAdminUserDetail/SuperAdminUserDetail";
import SuperAdminUserEdit from "./pages/super-admin/SuperAdminUserEdit/SuperAdminUserEdit";
import SuperAdminUserAdd from "./pages/super-admin/SuperAdminUserAdd/SuperAdminUserAdd";
import SuperAdminKependudukan from "./pages/super-admin/SuperAdminKependudukan/SuperAdminKependudukan";
import SuperAdminKependudukanDetail from "./pages/super-admin/SuperAdminKependudukanDetail/SuperAdminKependudukanDetail";
import SuperAdminKependudukanEdit from "./pages/super-admin/SuperAdminKependudukanEdit/SuperAdminKependudukanEdit";
import SuperAdminSosial from "./pages/super-admin/SuperAdminSosial/SuperAdminSosial";
import SuperAdminSosialDetail from "./pages/super-admin/SuperAdminSosialDetail/SuperAdminSosialDetail";
import SuperAdminSosialEdit from "./pages/super-admin/SuperAdminSosialEdit/SuperAdminSosialEdit";
import SuperAdminKesehatan from "./pages/super-admin/SuperAdminKesehatan/SuperAdminKesehatan";
import SuperAdminDesaAdd from "./pages/super-admin/SuperAdminDesaAdd/SuperAdminDesaAdd";
import SuperAdminKecamatanAdd from "./pages/super-admin/SuperAdminKecamatanAdd/SuperAdminKecamatanAdd";
import SuperAdminDesa from "./pages/super-admin/SuperAdminDesa/SuperAdminDesa";
import SuperAdminKecamatan from "./pages/super-admin/SuperAdminKecamatan/SuperAdminKecamatan";
import LayananDetail from "./pages/user/LayananDetail/LayananDetail";
import Bpjs from "./components/LayananDetail/Bpjs/Bpjs";
import DaftarKTP from "./components/LayananDetail/DaftarKTP/DaftarKTP";
import SKDomisili from "./components/LayananDetail/SKDomisili/SKDomisili";
import SuratJalan from "./components/LayananDetail/SuratJalan/SuratJalan";
import SKLahir from "./components/LayananDetail/SKLahir/SKLahir";
import SKMeninggal from "./components/LayananDetail/SKMeninggal/SKMeninggal";
import SKPindahDatang from "./components/LayananDetail/SKPindahDatang/SKPindahDatang";
import SKDudaJanda from "./components/LayananDetail/SKDudaJanda/SKDudaJanda";
import KartuKeluarga from "./components/LayananDetail/KartuKeluarga/KartuKeluarga";
import SKMenikah from "./components/LayananDetail/SKMenikah/SKMenikah";
import SKPerubahanStatusPendidikan from "./components/LayananDetail/SKPerubahanStatusPendidikan/SKPerubahanStatusPendidikan";
import SKPerubahanStatusPekerjaan from "./components/LayananDetail/SKPerubahanStatusPendidikan/SKPerubahanStatusPendidikan";
import SKPerubahanStatusKependudukan from "./components/LayananDetail/SKPerubahanStatusKependudukan/SKPerubahanStatusKependudukan";
import ESignature from "./components/LayananDetail/ESignature/ESignature";
import SKCerai from "./components/LayananDetail/SKCerai/SKCerai";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* user */}
        <Route path="/" element={<Home />} />
        <Route path="/kependudukan" element={<Kependudukan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/dokumen" element={<Dokumen />} />
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
          path="/sk-domisili"
          element={
            <LayananDetail>
              <SKDomisili />
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
          path="/sk-lahir"
          element={
            <LayananDetail>
              <SKLahir />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-meninggal"
          element={
            <LayananDetail>
              <SKMeninggal />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-pindah-datang"
          element={
            <LayananDetail>
              <SKPindahDatang />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-duda-janda"
          element={
            <LayananDetail>
              <SKDudaJanda />
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
          path="/sk-menikah"
          element={
            <LayananDetail>
              <SKMenikah />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-cerai"
          element={
            <LayananDetail>
              <SKCerai />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-status-pendidikan"
          element={
            <LayananDetail>
              <SKPerubahanStatusPendidikan />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-status-pekerjaan"
          element={
            <LayananDetail>
              <SKPerubahanStatusPekerjaan />
            </LayananDetail>
          }
        />
        <Route
          path="/sk-status-kependudukan"
          element={
            <LayananDetail>
              <SKPerubahanStatusKependudukan />
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
          path="/bpjs"
          element={
            <LayananDetail>
              <Bpjs />
            </LayananDetail>
          }
        />

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
        <Route path="/super-admin/desa/add" element={<SuperAdminDesaAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
