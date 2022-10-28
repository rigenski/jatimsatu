import React from "react";
import AdminDashboard from "src/components/AdminDashboard/AdminDashboard";
import KesehatanEx from "src/assets/images/dashboard/kesehatan-ex.png";

const AdminKesehatan = () => {
  return (
    <>
      <AdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Kesehatan</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Data fasilitas kesehatan di desa
            </p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body p-lg-4">
            <img
              src={KesehatanEx}
              alt=""
              className="mb-4"
              style={{ height: "64px" }}
            />
            <h6 className="mb-3 text-heading-6 text-grey-1">Tentang</h6>
            <p className="mb-4 text-body-4 text-grey-1">
              Rumah Sakit Islam Aminah adalah salah satu Amal Usaha Muhammadiyah
              Blitar yang tergabung dalam Jaringan Rumah Sakit
              Muhammadiyah/’Aisyiyah Jawa timur. RSI Aminah merupakan
              pengembangan sekaligus relokasi dari RSIA Aminah Blitar yang
              semula beralamat di jalan Veteran No. 12 Blitar. Pada awalnya
              Rumah sakit ini berupa BKIA/RB yang mendapatkan Ijin sementara
              pada tanggal 1 Juni 1972 dari Depkes Jatim dengan 17 TT. Pada 12
              Agustus 1982 mendapatkan Ijin dengan nama RSU Aminah dari Gubernur
              Jatim dan tanggal 10 Desember 1987 mendapatkan Ijin RB Aminah dari
              Depkes Jatim.{" "}
            </p>
            <button className="btn w-auto px-2 text-white bg-primary-2 text-center border-0 rounded-1">
              Pergi
            </button>
          </div>
        </div>
      </AdminDashboard>
    </>
  );
};

export default AdminKesehatan;
