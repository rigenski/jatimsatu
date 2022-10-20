import React from "react";

// style
import "./Signup.css";

const Signup = () => {
  return (
    <>
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
                        Daftar
                      </h3>
                      <p className="text-body-2 text-grey-3 text-center">
                        Daftarkan akun anda dengan mengisi formulir berikut.
                        Anda sudah punya akun?{" "}
                        <a
                          href="/signin"
                          className="text-primary-2 fw-semibold"
                        >
                          Masuk disini
                        </a>
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="mb-3">
                        <label
                          htmlFor="name"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Nama
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Masukkan nama anda disini..."
                        />
                      </div>
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
                      <div className="mb-3">
                        <label
                          htmlFor="password"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control text-body-4 text-grey-4"
                          id="password"
                          placeholder="Masukkan password anda disini..."
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="confirm_password"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Konfirmasi Password
                        </label>
                        <input
                          type="password"
                          className="form-control text-body-4 text-grey-4"
                          id="confirm_password"
                          placeholder="Masukkan ulang password baru anda disini..."
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="nik"
                          className="form-label text-body-3 text-grey-1"
                        >
                          NIK
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nik"
                          placeholder="Masukkan nomor induk keluarga anda disini..."
                        />
                      </div>
                      <p className="text-body-4 text-grey-3 mb-0">
                        Lupa kata sandi?{" "}
                        <a href="" className="text-primary-2 fw-semibold">
                          Klik disini
                        </a>
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-100 px-4 py-3 text-button text-white bg-primary-2 text-center border-0 rounded"
                      >
                        Daftar
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
