import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";

const SuperAdminSosialDetail = () => {
  const [section, setSection] = useState("formulir-pendaftaran");

  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Detail dokumen</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Sosial / Detail dokumen
            </p>
          </div>
          <div className="p-3 text-white bg-black">
            Dokumen berhasil disimpan
            <Icon
              icon="akar-icons:circle-x"
              width={24}
              height={24}
              color="#FFFFFF"
              className="ms-2"
            />
          </div>
        </div>
        <div className="card mb-4 w-100">
          <div className="card-body p-lg-4">
            <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
              <div className="mb-3 mb-lg-0">
                <h5 className="mb-1 text-heading-5 text-grey-1">
                  Pengajuan Surat Keterangan BPJS
                </h5>
                <p className="mb-0 text-paragraph-2 text-grey-3">
                  Isi formulir dan unggah dokumen-dokumen yang dibutuhkan untuk
                  mendapat surat keterangan
                </p>
              </div>
              <div className="d-flex">
                <a
                  href="/super-admin/sosial/edit"
                  className="btn me-3 w-auto px-2 text-button text-white bg-primary-2  text-center border-0 rounded-1"
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
                  className="btn w-auto px-2 text-button text-white bg-danger text-center border-0 rounded-1"
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
            <div className="mb-4">
              <div className="d-flex align-items-center border-bottom border-grey-4">
                <button
                  type="button"
                  className={
                    section === "formulir-pendaftaran"
                      ? "px-3 py-2 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      : "px-3 py-2 text-button text-grey-1 bg-background text-center border-0 rounded-1"
                  }
                  onClick={() => setSection("formulir-pendaftaran")}
                >
                  Formulir Pendaftaran
                </button>
                <button
                  type="button"
                  className={
                    section === "upload-dokumen"
                      ? "ms-2 px-3 py-2 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      : "ms-2 px-3 py-2 text-button text-grey-1 bg-background text-center border-0 rounded-1"
                  }
                  onClick={() => setSection("upload-dokumen")}
                >
                  Upload Dokumen
                </button>
              </div>
            </div>
            {section === "formulir-pendaftaran" ? (
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
                      defaultValue="Bonyfasius Lumbanraja"
                      disabled
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
                      defaultValue="3312278010000009"
                      disabled
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
                      disabled
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
                    <select className="form-select" id="desa" disabled>
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
                    <select className="form-select" id="kecamatan" disabled>
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
                    <select className="form-select" id="kelurahan" disabled>
                      <option>Blitar</option>
                      <option>Malang</option>
                    </select>
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
                      disabled
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
                      defaultValue="07"
                      disabled
                    />
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
                      defaultValue="172931"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <label
                      htmlFor="deskripsi"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Deskripsi <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deskripsi"
                      defaultValue="Pembuatan BPJS pribadi"
                      disabled
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="kk"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Upload KK <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="kk"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="ktp"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Upload KTP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="ktp"
                      disabled
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-body">
                <p className="mb-4 text-body-3 text-grey-1 text-center">
                  Apakah anda yakin untuk hapus dokumen ini?
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex">
                    <button
                      className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1"
                      data-bs-dismiss="modal"
                    >
                      Batal
                    </button>
                    <button className="btn w-auto px-2 text-white bg-danger text-center border-0 rounded-1">
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
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminSosialDetail;
