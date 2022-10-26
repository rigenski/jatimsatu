import { Icon } from "@iconify/react";
import React, { useState } from "react";

// style
import "./Signup.css";

// asset
import SendIcon from "src/assets/images/auth/send-icon.png";

const Signup = () => {
  const [status, setStatus] = useState(1);

  if (status === 1) {
    return (
      <main>
        <section className="auth bg-primary-2">
          <div className="container h-100">
            <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
              <div className="card">
                <div className="card-body px-3 py-5 p-md-5">
                  <form action="">
                    <div className="mb-4">
                      <h3 className="mb-3 text-heading-3 text-grey-1 text-center">
                        Register
                      </h3>
                      <p className="text-body-2 text-grey-3 text-center">
                        Masukkan no hp anda untuk mendaftar.
                        <br /> Sudah punya akun?{" "}
                        <a
                          href="/signin"
                          className="text-primary-2 fw-semibold"
                        >
                          Masuk sekarang!
                        </a>
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="mb-3">
                        <label
                          htmlFor="phone"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Nomor HP
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Masukkan nomor hp anda disini..."
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-lg w-100 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                        onClick={() => setStatus(2)}
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
    );
  } else if (status === 2) {
    return (
      <>
        <main>
          <section className="auth bg-primary-2">
            <div className="container h-100">
              <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
                <div className="card rounded-4">
                  <div className="card-body px-3 py-5 p-md-5">
                    <form action="">
                      <div className="mb-4">
                        <div className="mb-3 d-flex align-items-center">
                          <Icon
                            icon="ep:back"
                            width={48}
                            height={48}
                            className="me-3"
                          />
                          <h3 className="mb-0 text-heading-4 text-grey-1">
                            Register
                          </h3>
                        </div>
                        <div>
                          <div className="mb-4 d-flex flex-column align-items-center">
                            <img
                              src={SendIcon}
                              alt=""
                              className="mb-4"
                              height={80}
                              width={80}
                            />
                            <h3 className="mb-2 text-heading-5 text-grey-1 text-center">
                              Link register terkirim
                            </h3>
                            <p className="mb-0 text-paragraph-2 text-grey-2 text-center">
                              Mohon cek whatsapp nomor hp 081234567890, dan klik
                              tautan untuk membuat akun baru.
                            </p>
                          </div>
                        </div>
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
  } else if (status === 3) {
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
                                htmlFor="kk"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Upload KK <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="kk"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="ktp"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Upload KTP{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="ktp"
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
                          className="btn btn-lg text-button text-white bg-primary-2 text-center border-0 rounded-1"
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
  }
};

export default Signup;
