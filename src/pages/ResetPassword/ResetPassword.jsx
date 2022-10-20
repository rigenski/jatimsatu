import React, { useState } from "react";

// library
import { Icon } from "@iconify/react";

// style
import "./ResetPassword.css";

// local
import SucessIcon from "src/assets/images/auth/success-icon.svg";

const sections = [
  {
    title: "otp",
    desc: "Masukkan kode OTP",
  },
  {
    title: "reset",
    desc: "Masukkan password baru",
  },
  {
    title: "complete",
    desc: "Password telah diganti",
  },
];

const ResetPassword = () => {
  const [section, setSection] = useState(sections[0].title);

  const steps = [
    {
      title: "Verifikasi nomor HP",
    },
    {
      title: "Ganti password baru",
    },
  ];

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
                          {sections.find((e) => e.title === section).desc}
                        </h3>
                      </div>
                      <div className="row">
                        {steps.map((item, index) => {
                          if (section === sections[0].title) {
                            return (
                              <div
                                className="mb-2 col-12 col-md mb-md-0"
                                key={index}
                              >
                                <div className="mb-2 border-bottom border-4"></div>
                                <div className="d-flex justify-content-center align-items-center">
                                  <span
                                    className="badge me-2 text-dark bg-grey-3 rounded-pill"
                                    style={{ fontSize: "8px" }}
                                  >
                                    {index + 1}
                                  </span>
                                  <p className="mb-0 text-paragraph-4 text-grey-2">
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                            );
                          } else if (section === sections[1].title) {
                            if (index === 0) {
                              return (
                                <div
                                  className="mb-2 col-12 col-md mb-md-0"
                                  key={index}
                                >
                                  <div className="mb-2 border-bottom border-4 border-primary-2"></div>
                                  <div className="d-flex justify-content-center align-items-center">
                                    <span
                                      className="badge me-2 text-white bg-primary-2 rounded-pill"
                                      style={{ fontSize: "8px" }}
                                    >
                                      {index + 1}
                                    </span>
                                    <p className="mb-0 text-paragraph-4 text-grey-2">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                              );
                            } else {
                              return (
                                <div
                                  className="mb-2 col-12 col-md mb-md-0"
                                  key={index}
                                >
                                  <div className="mb-2 border-bottom border-4"></div>
                                  <div className="d-flex justify-content-center align-items-center">
                                    <span
                                      className="badge me-2 text-dark bg-grey-3 rounded-pill"
                                      style={{ fontSize: "8px" }}
                                    >
                                      {index + 1}
                                    </span>
                                    <p className="mb-0 text-paragraph-4 text-grey-2">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          } else {
                            return (
                              <div
                                className="mb-2 col-12 col-md mb-md-0"
                                key={index}
                              >
                                <div className="mb-2 border-bottom border-4 border-primary-2"></div>
                                <div className="d-flex justify-content-center align-items-center">
                                  <span
                                    className="badge me-2 text-white bg-primary-2 rounded-pill"
                                    style={{ fontSize: "8px" }}
                                  >
                                    {index + 1}
                                  </span>
                                  <p className="mb-0 text-paragraph-4 text-grey-2">
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                    {sections[0].title === section ? (
                      <>
                        <div className="mb-4">
                          <div className="mb-3">
                            <label
                              htmlFor="phone"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Kode OTP
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Masukkan kode OTP yang telah dikirim ke nomor hp anda"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="w-100 px-4 py-3 text-button text-white bg-primary-2 text-center border-0 rounded"
                            onClick={() => setSection(sections[1].title)}
                          >
                            Lanjutkan
                          </button>
                        </div>
                      </>
                    ) : sections[1].title === section ? (
                      <>
                        <div className="mb-4">
                          <div className="mb-3">
                            <label
                              htmlFor="password"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Password Baru
                            </label>
                            <input
                              type="password"
                              className="form-control text-body-4 text-grey-4"
                              id="password"
                              placeholder="Masukkan password baru anda disini..."
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="confirm_password"
                              className="form-label text-body-3 text-grey-1"
                            >
                              Konfirmasi Password Baru
                            </label>
                            <input
                              type="password"
                              className="form-control text-body-4 text-grey-4"
                              id="confirm_password"
                              placeholder="Masukkan ulang password baru anda disini..."
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="w-100 px-4 py-3 text-button text-white bg-primary-2 text-center border-0 rounded"
                            onClick={() => setSection(sections[2].title)}
                          >
                            Lanjutkan
                          </button>
                        </div>
                      </>
                    ) : sections[2].title === section ? (
                      <>
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
                        <div>
                          <button
                            type="button"
                            className="w-100 px-4 py-3 text-button text-white bg-primary-2 text-center border-0 rounded"
                          >
                            Kembali ke halaman masuk
                          </button>
                        </div>
                      </>
                    ) : null}
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

export default ResetPassword;
