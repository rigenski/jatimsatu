import { Icon } from "@iconify/react";
import React from "react";
import Dashboard from "src/components/Dashboard/Dashboard";

const SuperAdminUserDetail = () => {
  return (
    <>
      <Dashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Detail user</h3>
            <p className="mb-0 text-body-2 text-grey-3">Sosial / Detail user</p>
          </div>
          <div className="d-flex">
            <a
              href="/super-admin/users/edit"
              className="btn me-3 w-auto px-2 text-button text-white bg-primary-2  text-center border-0 rounded"
            >
              <Icon
                icon="la:pen"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Edit
            </a>
            <button
              className="btn w-auto px-2 text-button text-white bg-danger text-center border-0 rounded"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              <Icon
                icon="akar-icons:trash-can"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Hapus
            </button>
          </div>
        </div>
        <div className="card mb-4 w-100">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div>
                  <label
                    htmlFor="tipe-user"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Tipe User <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="tipe-user">
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4 w-100">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="nama"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Nama <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    defaultValue="Bonyfasius  Lumbanraja"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="no-hp"
                    className="form-label text-body-3 text-grey-1"
                  >
                    No. HP <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="no-hp"
                    placeholder="Masukkan nomor hp"
                    value="type something here"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="nik"
                    className="form-label text-body-3 text-grey-1"
                  >
                    NIK <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nik"
                    defaultValue="331241418000121"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="upload-kk"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Upload KK <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" id="upload-kk" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="upload-ktp"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Upload KTP <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" id="upload-ktp" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="tempat-lahir"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Tempat Lahir <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tempat-lahir"
                    defaultValue="Blitar"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="tanggal-lahir"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Tanggal Lahir <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="tanggal-lahir"
                    defaultValue="01/01/2000"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="alamat"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Alamat <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="alamat"
                    defaultValue="Jalan Alpukat"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="desa"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Desa <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="desa">
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="kecamatan"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Kecamatan <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="kecamatan">
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="kelurahan"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Kelurahan <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="kelurahan">
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3 mb-md-0">
                  <label
                    htmlFor="kode-pos"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Kode Pos <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="kode-pos"
                    defaultValue="Blitar"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="rt"
                    className="form-label text-body-3 text-grey-1"
                  >
                    RT <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rt"
                    defaultValue="01"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="rw"
                    className="form-label text-body-3 text-grey-1"
                  >
                    RW <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rw"
                    defaultValue="02"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label
                    htmlFor="pekerjaan"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Pekerjaan <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pekerjaan"
                    defaultValue="Karyawan Swasta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="deleteModal"
          tabindex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4">
              <div class="modal-body">
                <p className="mb-4 text-body-3 text-grey-1 text-center">
                  Apakah anda yakin untuk hapus dokumen ini?
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex">
                    <button
                      className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded"
                      data-bs-dismiss="modal"
                    >
                      Batal
                    </button>
                    <button className="btn w-auto px-2 text-white bg-danger text-center border-0 rounded">
                      <Icon
                        icon="akar-icons:trash-can"
                        width={24}
                        height={24}
                        color="#FFFFFF"
                        className="me-2"
                      />
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default SuperAdminUserDetail;
