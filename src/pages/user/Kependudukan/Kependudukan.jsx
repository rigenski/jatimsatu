import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import "./Kependudukan.css";

// assets
import JumbotronBg from "src/assets/images/pre-dashboard/kependudukan/jumbotron-bg.png";
import DaftarKtpIcon from "src/assets/images/pre-dashboard/kependudukan/daftar-ktp-icon.png";
import SuratJalanIcon from "src/assets/images/pre-dashboard/kependudukan/surat-jalan-icon.png";
import SuratKeteranganIcon from "src/assets/images/pre-dashboard/kependudukan/surat-keterangan-icon.png";
import PerubahanStatusIcon from "src/assets/images/pre-dashboard/kependudukan/perubahan-status-icon.png";
import KartuKeluargaIcon from "src/assets/images/pre-dashboard/kependudukan/kartu-keluarga-icon.png";
import ESignatureIcon from "src/assets/images/pre-dashboard/kependudukan/e-signature-icon.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// data
const layananData = [
  {
    title: "Daftar KTP",
    icon: DaftarKtpIcon,
    path: "/home/daftar-ktp",
  },
  {
    title: "Surat Jalan",
    icon: SuratJalanIcon,
    path: "/home/surat-jalan",
  },
  {
    title: "Surat Keterangan",
    icon: SuratKeteranganIcon,
    path: "/home/surat-keterangan",
  },
  {
    title: "Perubahan Status",
    icon: PerubahanStatusIcon,
    path: "/home/perubahan-status",
  },
  {
    title: "Kartu Keluarga",
    icon: KartuKeluargaIcon,
    path: "/home/kartu-keluarga",
  },
  {
    title: "E-Signature",
    icon: ESignatureIcon,
    path: "/home/e-signature",
  },
];

const Kependudukan = () => {
  return (
    <>
      <Navbar />
      <main className="kependudukan">
        <div
          className="jumbotron pt-2 px-0 position-relative bg-light px-lg-5 pt-lg-4"
          style={{ background: `url(${JumbotronBg})` }}
        >
          <div
            className="jumbotron-frame w-100 h-100 position-absolute"
            style={{
              background:
                "linear-gradient(89.94deg, rgba(15, 151, 194, 0.9) 49.13%, rgba(107, 219, 255, 0.4) 99.94%)",
            }}
          ></div>
          <div className="container py-3 position-relative px-3">
            <div className="mb-4 pb-4">
              <Link to="/home" className="mb-4 d-flex align-items-center">
                <Icon
                  icon="akar-icons:chevron-left"
                  width={16}
                  height={16}
                  color="#FFFFFF"
                />
                <h6 className="mb-0 text-heading-7 text-white ms-2">Kembali</h6>
              </Link>
              <h1 className="mb-3 text-heading-1 text-white">
                Pilih Layanan Kependudukan
              </h1>
              <p className="col-md-8 text-body-4 text-white">
                Kami menyediakan berbagai layanan untuk memenuhi kebutuhan
                pemerintahan seperti kependudukan, sosial, kesehatan, dan
                pariwisata guna mempermudah aktivitas masyarakat dan
                pemerintahan
              </p>
            </div>
            <div className="layanan mb-4 pb-4">
              <div className="row mx-0 rounded-3">
                {layananData.map((item, index) => {
                  return (
                    <Link
                      to={item.path}
                      className="col-6 col-xl-4 p-2 bg-transparent border border-1 border-grey-4"
                      key={index}
                    >
                      <div className="p-2 d-flex flex-column align-items-center flex-md-row">
                        <img
                          src={item.icon}
                          alt=""
                          className="me-0 mb-2 me-md-4 mb-md-0"
                        />
                        <h5 className="mb-0 text-heading-6 text-grey-1 text-center text-md-left">
                          {item.title}
                        </h5>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Kependudukan;
