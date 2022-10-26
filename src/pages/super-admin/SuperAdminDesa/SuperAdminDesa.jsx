import { Icon } from "@iconify/react";
import React from "react";
import Dashboard from "src/components/Dashboard/Dashboard";

const SuperAdminDesa = () => {
  return (
    <>
      <Dashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Desa</h3>
            <p className="mb-0 text-body-2 text-grey-3">Kelola data desa</p>
          </div>
          <div className="d-flex">
            <a
              href="/super-admin/desa/add"
              className="btn w-auto px-2 text-button text-white bg-primary-2 text-center border-0 rounded-1"
            >
              <Icon
                icon="akar-icons:circle-plus"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Tambah
            </a>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body p-lg-4">
            <div className="mb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
              <div className="mb-3 mb-lg-0"></div>
              <div className="d-flex align-items-center">
                <button
                  className="btn me-3 w-auto px-2 d-flex justify-content-center align-items-center text-button bg-white text-center border-1 border-grey-5 rounded-1"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                >
                  <Icon
                    icon="clarity:filter-line"
                    width={24}
                    height={24}
                    color="#474747"
                    className="me-2"
                  />
                  Filter
                </button>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    id="cari"
                    placeholder="Cari dokumen"
                    style={{ paddingLeft: "48px" }}
                  />
                  <Icon
                    icon="charm:search"
                    width={24}
                    height={24}
                    color="#000000"
                    className="position-absolute ms-3"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
      <div
        class="modal fade"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Dokumen</p>
                <div className="row ">
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        Daftar KTP
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        Kartu Keluarga
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        Surat Jalan
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Lahir
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Meninggal
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Pindah/datang
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Duda/Janda
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Lahir
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Menikah
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        SK Cerai
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        Perubahan Status Pendidikan
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        class="form-check-label ms-1 text-paragraph-2 "
                        for="daftar-ktp"
                      >
                        Perubahan Status Pekerjaan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 border-bottom border-grey-4"></div>
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Tanggal</p>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <input
                      type="date"
                      className="form-control mb-2"
                      id="tanggal-awal"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="date"
                      className="form-control mb-2"
                      id="tanggal-akhir"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 border-bottom border-grey-4"></div>
              <div className="d-flex justify-content-end">
                <button className="btn me-3 w-auto px-2 text-button text-white bg-primary-2  text-center border-0 rounded-1">
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminDesa;
