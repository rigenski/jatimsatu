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
import SKDomisili from "src/components/Kependudukan/SKDomisili/SKDomisili";
import SuratJalan from "src/components/Kependudukan/SuratJalan/SuratJalan";
import SKLahir from "src/components/Kependudukan/SKLahir/SKLahir";
import SKMeninggal from "src/components/Kependudukan/SKMeninggal/SKMeninggal";
import SKPindahDatang from "src/components/Kependudukan/SKPindahDatang/SKPindahDatang";
import SKDudaJanda from "src/components/Kependudukan/SKDudaJanda/SKDudaJanda";
import KartuKeluarga from "src/components/Kependudukan/KartuKeluarga/KartuKeluarga";
import SKMenikah from "src/components/Kependudukan/SKMenikah/SKMenikah";
import ESignature from "src/components/Kependudukan/ESignature/ESignature";
import SKCerai from "src/components/Kependudukan/SKCerai/SKCerai";
import Bansos from "./components/Sosial/Bansos/Bansos";
import BantuanLangsungTunai from "./components/Sosial/BantuanLangsungTunai/BantuanLangsungTunai";
import KartuIndonesiaPintar from "./components/Sosial/KartuIndonesiaPintar/KartuIndonesiaPintar";
import KartuIndonesiaSehat from "./components/Sosial/KartuIndonesiaSehat/KartuIndonesiaSehat";
import KartuPrakerja from "./components/Sosial/KartuPrakerja/KartuPrakerja";
import BantuanBencana from "./components/Sosial/BantuanBencana/BantuanBencana";
import PenyaluranSubsidi from "./components/Sosial/PenyaluranSubsidi/PenyaluranSubsidi";
import Pengaduan from "./components/Sosial/Pengaduan/KartuPrakerja";
import PerubahanStatus from "./components/Kependudukan/PerubahanStatus/PerubahanStatus";

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
          path="/surat-keterangan"
          element={
            <LayananDetail>
              <SKDomisili />
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
          path="/perubahan-status"
          element={
            <LayananDetail>
              <PerubahanStatus />
            </LayananDetail>
          }
        />
        {/* <Route
          path="/perubahan-status-pendidikan"
          element={
            <LayananDetail>
              <PerubahanStatusPendidikan />
            </LayananDetail>
          }
        />
        <Route
          path="/perubahan-status-pekerjaan"
          element={
            <LayananDetail>
              <PerubahanStatusPekerjaan />
            </LayananDetail>
          }
        />
        <Route
          path="/perubahan-status-kependudukan"
          element={
            <LayananDetail>
              <PerubahanStatusKependudukan />
            </LayananDetail>
          }
        /> */}
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
