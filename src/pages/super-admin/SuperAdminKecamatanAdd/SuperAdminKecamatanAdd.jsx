import React from "react";
import Dashboard from "src/components/Dashboard/Dashboard";

const SuperAdminKecamatanAdd = () => {
  return (
    <>
      <Dashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">
              Tambah Kecamatan
            </h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Tambah data kecamatan
            </p>
          </div>
          <div className="d-flex">
            <button className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1">
              Batal
            </button>
            <button className="btn w-auto px-2 text-white bg-primary-2 text-center border-0 rounded-1">
              Simpan
            </button>
          </div>
        </div>
        <div className="card mb-4 w-100">
          <div className="card-body p-lg-4">
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="kecamatan"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Kecamatan <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="kecamatan"
                    defaultValue="Bakung"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="kabupaten"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Kabupaten/kota <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="kabupaten">
                    <option>---pilih salah satu---</option>
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="provinsi"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Provinsi <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="provinsi">
                    <option>---pilih salah satu---</option>
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default SuperAdminKecamatanAdd;
