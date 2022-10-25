import React from "react";

// style
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <main>
        <section className="auth register bg-primary-2">
          <div className="container h-100">
            <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
              <div className="card">
                <div className="register card-body px-3 py-5 p-md-5">
                  <form action="">
                    <div className="mb-4">
                      <h3 className="mb-3 text-heading-3 text-grey-1 text-center">
                        Register
                      </h3>
                      <p className="text-body-2 text-grey-3 text-center">
                        Silahkan melengkapi data pribadi Anda agar data Anda
                        dapat diverifikasi oleh admin kami
                      </p>
                    </div>
                    <div className="mb-4">
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
                              placeholder="Masukkan nama lengkap Anda"
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
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="password"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Password <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              placeholder="Masukkan password"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="password"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Konfirmasi Password{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              placeholder="Masukkan ulang password"
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
                              placeholder="Masukkan nomor induk keluarga"
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
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="tempat-lahir"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Tempat Lahir{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tempat-lahir"
                              placeholder="Masukkan tempat lahir sesuai KTP"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="tanggal-lahir"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Tanggal Lahir{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="tanggal-lahir"
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
                              placeholder="Masukkan alamat sesuai KTP"
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
                              <option>---pilih salah satu---</option>
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
                              <option>---pilih salah satu---</option>
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
                              <option>---pilih salah satu---</option>
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
                              placeholder="Masukkan kode pos "
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
                              placeholder="Masukkan RT sesuai KTP"
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
                              placeholder="Masukkan RW sesuai KTP"
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
                              placeholder="Masukkan pekerjaan anda"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-lg text-button text-white bg-primary-2 text-center border-0 rounded"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
