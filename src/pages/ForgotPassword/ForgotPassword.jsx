import React from "react";

// library
import { Icon } from "@iconify/react";

// style
import "./ForgotPassword.css";

const ForgotPassword = () => {
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
                        Pulihkan akun anda dengan memasukkan nomor hp yang sudah
                        terdaftar.
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
                    <div>
                      <button
                        type="button"
                        className="w-100 px-4 py-3 text-button text-white bg-primary-2 text-center border-0 rounded"
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
};

export default ForgotPassword;
