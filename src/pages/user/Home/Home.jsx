import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import "./Home.css";

// assets
import HomeBg from "src/assets/images/pre-dashboard/home-bg.png";
import KependudukanIcon from "src/assets/images/pre-dashboard/kependudukan-icon.svg";
import SosialIcon from "src/assets/images/pre-dashboard/sosial-icon.svg";
import KesehatanIcon from "src/assets/images/pre-dashboard/kesehatan-icon.svg";
import PendidikanIcon from "src/assets/images/pre-dashboard/pendidikan-icon.svg";
import UmkmIcon from "src/assets/images/pre-dashboard/umkm-icon.svg";
import PerizinanIcon from "src/assets/images/pre-dashboard/perizinan-icon.svg";
import PostItem from "src/assets/images/pre-dashboard/post-item.png";
import { Link } from "react-router-dom";

// data
const layananData = [
  {
    title: "Kependudukan",
    icon: KependudukanIcon,
    path: "/home/kependudukan",
  },
  {
    title: "Sosial",
    icon: SosialIcon,
    path: "/home/sosial",
  },
  {
    title: "Kesehatan",
    icon: KesehatanIcon,
    path: "/home/kesehatan",
  },
  {
    title: "Pendidikan",
    icon: PendidikanIcon,
    path: "/home/pendidikan",
  },
  {
    title: "UMKM",
    icon: UmkmIcon,
    path: "/home/umkm",
  },
  {
    title: "Perizinan",
    icon: PerizinanIcon,
    path: "/home/perizinan",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <div
          className="jumbotron pt-5 px-0 position-relative bg-light px-lg-5"
          style={{ background: `url(${HomeBg})` }}
        >
          <div
            className="jumbotron-frame w-100 h-100 position-absolute"
            style={{
              background:
                "linear-gradient(89.94deg, rgba(63, 113, 86, 0.8) 49.13%, rgba(63, 113, 86, 0.4) 99.94%)",
            }}
          ></div>
          <div className="container py-3 position-relative px-3">
            <div className="mb-4 pb-4">
              <h1 className="mb-3 text-heading-1 text-white">
                Layanan Jatimsatu
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
                      className="col-6 p-2 bg-transparent border border-1 border-grey-4"
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
            <div className="mb-4 mb-md-5">
              <div className="row mx-0">
                <div className="col-12 col-md-8 col-xl-9 px-0">
                  <div className="post-item--banner mb-3 mb-md-0 ">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h3 className="mb-0 text-heading-3 text-grey-1 d-none d-md-block">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h3>
                      <h6 className="mb-0 text-heading-6 text-grey-1 d-block d-md-none">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xl-3 px-0 ps-0 ps-md-4">
                  <div className="post-item mb-3">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                  <div className="post-item mb-3">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 border border-1 border-grey-2"></div>
            <div className="mb-4 mb-md-5">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="post-item mb-4">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="post-item mb-4">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="post-item mb-4">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="post-item mb-4">
                    <img
                      src={PostItem}
                      alt=""
                      className="w-100 mb-3 rounded-3"
                    />
                    <div>
                      <p className="mb-1 text-body-3 text-grey-4">
                        24 Juli 2022
                      </p>
                      <h6 className="mb-0 text-heading-6 text-grey-1">
                        7 Rekomendasi Tempat Makan di Blitar, Harga Mulai dari
                        Rp 10.000
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
