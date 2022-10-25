import { Icon } from "@iconify/react";
import React from "react";
import Dashboard from "src/components/Dashboard/Dashboard";

const SuperAdminHome = () => {
  return (
    <>
      <Dashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">
              Selamat datang di Jatimku
            </h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Kamu sedang masuk ke halaman Desa Bacem, Sutojayan, Blitar
            </p>
          </div>
          <div className="form-icon position-relative">
            <Icon
              icon="ic:outline-holiday-village"
              width={24}
              height={24}
              color="#474747"
              className="position-absolute"
            />
            <select className="form-select ps-5 w-auto" id="desa">
              <option>Blitar</option>
              <option>Malang</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-body-1 text-grey-1">Profesi</p>
                  <a type="button">
                    <Icon
                      icon="carbon:overflow-menu-vertical"
                      width={24}
                      height={24}
                      color="#474747"
                    />
                  </a>
                </div>
                <p className="mb-2 text-paragraph-1 text-grey-3">
                  Saldo saat ini
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0 text-heading-4 text-grey-1">
                    Rp57.250.000
                  </h4>
                  <div className="px-3 py-1 text-paragraph-1 bg-primary-6">
                    7.2%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-body-1 text-grey-1">Umur</p>
                  <a type="button">
                    <Icon
                      icon="carbon:overflow-menu-vertical"
                      width={24}
                      height={24}
                      color="#474747"
                    />
                  </a>
                </div>
                <p className="mb-2 text-paragraph-1 text-grey-3">
                  Saldo saat ini
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0 text-heading-4 text-grey-1">
                    Rp57.250.000
                  </h4>
                  <div className="px-3 py-1 text-paragraph-1 bg-primary-6">
                    7.2%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-body-1 text-grey-1">
                    Jumlah Penduduk
                  </p>
                  <a type="button">
                    <Icon
                      icon="carbon:overflow-menu-vertical"
                      width={24}
                      height={24}
                      color="#474747"
                    />
                  </a>
                </div>
                <p className="mb-2 text-paragraph-1 text-grey-3">
                  Saldo saat ini
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0 text-heading-4 text-grey-1">
                    Rp57.250.000
                  </h4>
                  <div className="px-3 py-1 text-paragraph-1 bg-primary-6">
                    7.2%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-body-1 text-grey-1">
                    Layanan Kependudukan
                  </p>
                  <a type="button">
                    <Icon
                      icon="carbon:overflow-menu-vertical"
                      width={24}
                      height={24}
                      color="#474747"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-body-1 text-grey-1">Layanan Sosial</p>
                  <a type="button">
                    <Icon
                      icon="carbon:overflow-menu-vertical"
                      width={24}
                      height={24}
                      color="#474747"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default SuperAdminHome;
