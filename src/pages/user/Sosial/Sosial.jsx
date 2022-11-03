import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import "./Sosial.css";

// assets
import JumbotronBg from "src/assets/images/pre-dashboard/sosial/jumbotron-bg.png";
import BantuanSosialIcon from "src/assets/images/pre-dashboard/sosial/bantuan-sosial-icon.png";
import BantuanLangsungTunaiIcon from "src/assets/images/pre-dashboard/sosial/bantuan-langsung-tunai-icon.png";
import BpjsIcon from "src/assets/images/pre-dashboard/sosial/bpjs-icon.png";
import KartuIndonesiaPintarIcon from "src/assets/images/pre-dashboard/sosial/kartu-indonesia-pintar-icon.png";
import KartuIndonesiaSehatIcon from "src/assets/images/pre-dashboard/sosial/kartu-indonesia-sehat-icon.png";
import BantuanBencanaIcon from "src/assets/images/pre-dashboard/sosial/bantuan-bencana-icon.png";
import DaftarKtpIcon from "src/assets/images/pre-dashboard/sosial/daftar-ktp-icon.png";
import SuratJalanIcon from "src/assets/images/pre-dashboard/sosial/surat-jalan-icon.png";
import SuratKeteranganIcon from "src/assets/images/pre-dashboard/sosial/surat-keterangan-icon.png";
import PenyaluranSubsidiIcon from "src/assets/images/pre-dashboard/sosial/penyaluran-subsidi-icon.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// data
const layananData = [
  {
    title: "Bantuan Sosial",
    icon: BantuanSosialIcon,
    path: "/bansos",
  },
  {
    title: "Bantuan Langsung Tunai",
    icon: BantuanLangsungTunaiIcon,
    path: "/bantuan-langsung-tunai",
  },
  {
    title: "BPJS",
    icon: BpjsIcon,
    path: "/bpjs",
  },
  {
    title: "Kartu Indonesia Pintar",
    icon: KartuIndonesiaPintarIcon,
    path: "/kartu-indonesia-pintar",
  },
  {
    title: "Kartu Indonesia Sehat",
    icon: KartuIndonesiaSehatIcon,
    path: "/kartu-indonesia-sehat",
  },
  {
    title: "Bantuan Bencana",
    icon: BantuanBencanaIcon,
    path: "/bantuan-bencana",
  },
  {
    title: "Daftar Ktp",
    icon: DaftarKtpIcon,
    path: "/daftar-ktp",
  },
  {
    title: "Surat Jalan",
    icon: SuratJalanIcon,
    path: "/surat-jalan",
  },
  {
    title: "Kartu Keluarga",
    icon: SuratKeteranganIcon,
    path: "/kartu-keluarga",
  },
  {
    title: "Penyaluran Subsidi",
    icon: PenyaluranSubsidiIcon,
    path: "/penyaluran-subsidi",
  },
];

const Sosial = () => {
  return (
    <>
      <Navbar />
      <main className="sosial">
        <div
          className="jumbotron pt-2 px-0 position-relative bg-light px-lg-5 pt-lg-4"
          style={{ background: `url(${JumbotronBg})` }}
        >
          <div
            className="jumbotron-frame w-100 h-100 position-absolute"
            style={{
              background:
                "linear-gradient(89.94deg, rgba(78, 198, 190, 0.8) 49.13%, rgba(45, 180, 172, 0.2) 99.94%)",
            }}
          ></div>
          <div className="container py-3 position-relative px-3">
            <div className="mb-4 pb-4">
              <Link to="/" className="mb-4 d-flex align-items-center">
                <Icon
                  icon="akar-icons:chevron-left"
                  width={16}
                  height={16}
                  color="#FFFFFF"
                />
                <h6 className="mb-0 text-heading-7 text-white ms-2">Kembali</h6>
              </Link>
              <h1 className="mb-3 text-heading-1 text-white">
                Pilih Layanan Sosial
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

export default Sosial;
