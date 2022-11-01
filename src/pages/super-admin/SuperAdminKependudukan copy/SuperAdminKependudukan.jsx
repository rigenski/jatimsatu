import { Icon } from "@iconify/react";
import React from "react";
import Dashboard from "src/components/Dashboard/Dashboard";

const SuperAdminKependudukan = () => {
  return (
    <>
      <Dashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Kependudukan</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Kelola data layanan kependudukan
            </p>
          </div>
          <div className="d-flex">
            <div className="form-icon me-3 position-relative">
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
            <a
              href="/super-admin/users/add"
              className="btn w-auto px-2 text-button text-white bg-primary-2 text-center border-0 rounded"
            >
              <Icon
                icon="akar-icons:circle-plus"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Tambah
            </a>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body">
            <div className="mb-4 d-flex justify-content-between align-items-center"></div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default SuperAdminKependudukan;
