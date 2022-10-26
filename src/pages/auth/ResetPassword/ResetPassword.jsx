import React, { useState } from "react";

// library
import { Icon } from "@iconify/react";

// style
import "./ResetPassword.css";

// asset
import SucessIcon from "src/assets/images/auth/success-icon.svg";
import SendIcon from "src/assets/images/auth/send-icon.png";

const ResetPassword = () => {
  const [status, setStatus] = useState(1);

  if (status === 1) {
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
                            Lupa password
                          </h3>
                        </div>
                        <p className="text-body-2 text-grey-3">
                          Pulihkan akun anda dengan memasukkan nomor hp yang
                          sudah terdaftar.
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
                          Lanjutkan
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
                            Lupa Password
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
                              Link ganti password terkirim
                            </h3>
                            <p className="mb-0 text-paragraph-2 text-grey-2 text-center">
                              Mohon cek whatsapp nomor hp 081234567890, dan klik
                              tautan untuk membuat password baru
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
                            Lupa password
                          </h3>
                        </div>
                        <p className="text-body-2 text-grey-3">
                          Buat password baru anda
                        </p>
                      </div>
                      <div className="mb-4">
                        <div className="mb-3">
                          <label
                            htmlFor="phone"
                            className="form-label text-body-3 text-grey-1"
                          >
                            Password Baru
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Masukkan password baru anda disini..."
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="phone"
                            className="form-label text-body-3 text-grey-1"
                          >
                            Konfirmasi Password Baru
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Masukkan ulang password baru anda disini..."
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          type="button"
                          className="btn btn-lg w-100 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                          onClick={() => setStatus(4)}
                        >
                          Lanjutkan
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
  } else if (status === 4) {
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
                      <div>
                        <div>
                          <div className="mb-4 d-flex flex-column align-items-center">
                            <img
                              src={SucessIcon}
                              alt=""
                              className="mb-3"
                              height={80}
                              width={80}
                            />
                            <h3 className="mb-1 text-heading-5 text-grey-1 text-center">
                              Password berhasil diganti
                            </h3>
                            <p className="text-paragraph-2 text-grey-2 text-center">
                              Kembali ke halaman masuk dan gunakan password yang
                              baru untuk masuk ke akun anda
                            </p>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <button
                              type="button"
                              className="btn btn-lg w-100 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                            >
                              Kembali ke halaman masuk
                            </button>
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
  }
};

export default ResetPassword;
