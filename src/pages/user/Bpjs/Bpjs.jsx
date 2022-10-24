import React, { useState } from "react";
import Navbar from "src/components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import "./Bpjs.css";

// assets
import DokumentTerkirimIllust from "src/assets/images/pre-dashboard/sosial/dokumen-terkirim-illust.svg";

const Bpjs = () => {
  const [section, setSection] = useState("formulir-pendaftaran");
  const [complete, setComplete] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bpjs">
        <div className="jumbotron pt-2 px-0 position-relative bg-primary-2 px-lg-5 pt-lg-4">
          <div className="container py-3 position-relative px-3">
            <div className="mb-4 pb-2">
              <a href="/" className="mb-4 d-flex align-items-center">
                <Icon
                  icon="akar-icons:chevron-left"
                  width={16}
                  height={16}
                  color="#FFFFFF"
                />
                <h6 className="mb-0 text-heading-7 text-white ms-2">Kembali</h6>
              </a>
            </div>
            <div className="form mb-4 px-3 py-4 bg-white rounded-2 px-md-4">
              <div className="mb-4 d-flex justify-content-between">
                <div>
                  <h5 className="mb-1 text-heading-5 text-grey-1">
                    Pengajuan Surat Keterangan BPJS
                  </h5>
                  <p className="mb-0 text-paragraph-2 text-grey-3">
                    Isi formulir dan unggah dokumen-dokumen yang dibutuhkan
                    untuk mendapat surat keterangan
                  </p>
                </div>
                {!complete ? (
                  <div className="d-none align-items-center d-lg-flex">
                    <button
                      type="button"
                      className="btn me-3 text-button text-grey-1 bg-white text-center border-1 rounded-1"
                    >
                      Batalkan
                    </button>
                    <button
                      type="button"
                      className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      onClick={() => setComplete(!complete)}
                    >
                      Kirim
                    </button>
                  </div>
                ) : null}
              </div>
              {!complete ? (
                <>
                  <div
                    class="alert alert-warning d-flex align-items-center"
                    role="alert"
                  >
                    <Icon
                      icon="akar-icons:triangle-alert"
                      width={24}
                      height={24}
                      color="#C18B00"
                      className="me-2"
                    />
                    <p className="mb-0 text-paragraph-2">
                      Masih ada data yang belum lengkap. Mohon cek ulang
                      formulir pendaftaran dan upload dokumen sebelum mengirim
                      dokumen
                    </p>
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
                            value="Bonyfasius Lumbanraja"
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
                            value="3312278010000009"
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
                            value="Jalan Alpukat"
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
                          <select class="form-select" id="desa" disabled>
                            <option value="1" selected>
                              Blitar
                            </option>
                            <option value="2">Malang</option>
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
                          <select class="form-select" id="kecamatan" disabled>
                            <option value="1" selected>
                              Blitar
                            </option>
                            <option value="2">Malang</option>
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
                          <select class="form-select" id="kelurahan" disabled>
                            <option value="1" selected>
                              Blitar
                            </option>
                            <option value="2">Malang</option>
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
                            value="01"
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
                            value="07"
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
                            value="172931"
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
                            placeholder="Berikan keterangan detail mengenai pengajuan anda"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="upload-kk"
                            className="form-label text-body-3 text-grey-1"
                          >
                            Upload KK <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="upload-kk"
                          />
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
                          <input
                            type="file"
                            className="form-control"
                            id="upload-ktp"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 d-flex justify-content-center align-items-center d-lg-none justify-content-md-end">
                    <button
                      type="button"
                      className="btn me-3 text-button text-grey-1 bg-white text-center border-1 rounded-1"
                    >
                      Batalkan
                    </button>
                    <button
                      type="button"
                      className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      onClick={() => setComplete(!complete)}
                    >
                      Kirim
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 border-bottom border-grey-4"></div>
                  <div className="dokumen-terkirim d-flex flex-column justify-content-center align-items-center">
                    <img src={DokumentTerkirimIllust} alt="" className="mb-4" />
                    <h5 className="mb-2 text-heading-5 text-black text-center">
                      Dokumen telah terkirim
                    </h5>
                    <p className="mb-4 text-paragraph-2 text-black text-center">
                      Dokumen akan selesai setelah mendapat persetujuan dari
                      admin. Anda akan mendapatkan informasi jika dokumen telah
                      selesai melalui notifkasi
                    </p>
                    <button
                      type="button"
                      className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
                    >
                      Kembali ke dashboard
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bpjs;
