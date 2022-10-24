import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import "./Dokumen.css";

const Dokumen = () => {
  return (
    <>
      <Navbar />
      <main className="dokumen">
        <div className="jumbotron pt-2 px-0 position-relative bg-primary-2 px-lg-5 pt-lg-4">
          <div className="container py-3 pt-5 position-relative px-3">
            <div className="form mb-4 px-3 py-4 bg-white rounded-2 px-md-4">
              <div className="mb-4 d-flex justify-content-between">
                <div>
                  <h5 className="mb-1 text-heading-5 text-grey-1">
                    Dokumen saya
                  </h5>
                  <p className="mb-0 text-paragraph-2 text-grey-3">
                    Informasi tentang dokumen pengajuan yang telah anda kirim
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-4 border-bottom border-grey-4"></div>
                <div className="row mb-2">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="mb-3">
                      <label
                        htmlFor="cari"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Cari <span className="text-danger">*</span>
                      </label>
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
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="mb-3">
                      <label
                        htmlFor="layanan"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Layanan <span className="text-danger">*</span>
                      </label>
                      <select class="form-select" id="layanan">
                        <option value="">pilih layanan</option>
                        <option value="1">Blitar</option>
                        <option value="2">Malang</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="mb-3">
                      <label
                        htmlFor="tanggal-awal"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Tanggal awal <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="tanggal-awal"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="mb-3">
                      <label
                        htmlFor="tanggal-akhir"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Tanggal akhir <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="tanggal-akhir"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="table-responsive mb-4">
                    <table class="table rounded-2">
                      <thead>
                        <tr className="bg-background">
                          <th scope="col" className="p-3 text-nowrap">
                            Nama Dokumen
                          </th>
                          <th scope="col" className="p-3 text-nowrap">
                            Layanan
                          </th>
                          <th scope="col" className="p-3 text-nowrap">
                            Tanggal Submit
                          </th>
                          <th scope="col" className="p-3 text-nowrap">
                            Status
                          </th>
                          <th scope="col" className="p-3 text-nowrap">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-paragraph-2">
                            Pengajuan Surat Keterangan Daftar KTP
                          </td>
                          <td className="text-paragraph-2">Kependudukan</td>
                          <td className="text-paragraph-2">
                            15-10-2022
                            <br />
                            21:00
                          </td>
                          <td className="text-paragraph-2">
                            <div className="badge bg-primary-2">Selesai</div>
                            <p className="mb-0 text-paragraph-4 text-grey-1">
                              Lorem Ipsum
                            </p>
                          </td>
                          <td className="text-paragraph-2">
                            <button className="btn w-100 px-3 py-1 mb-2 text-white text-nowrap bg-primary-2 rounded-1">
                              Lihat Dokumen
                            </button>
                            <button className="btn w-100 px-3 py-1 text-white text-nowrap bg-blue-2 rounded-1">
                              Export PDF
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination d-flex flex-column justify-content-between align-items-center flex-md-row">
                    <div className="mb-3 d-flex align-items-center mb-md-0">
                      <span className="text-body-4 text-black">Show</span>
                      <select class="form-select mx-2">
                        <option value="4">4</option>
                        <option value="10">10</option>
                      </select>
                      <span className="text-body-4 text-black">entries</span>
                    </div>
                    <ul className="mb-0 p-0 d-flex align-items-center">
                      <li className="mx-2">
                        <button className="text-grey-1 bg-transparent border-0 rounded-circle">
                          {"<"}
                        </button>
                      </li>
                      <li className="mx-2">
                        <button className="text-white bg-primary-2 border-0 rounded-circle">
                          1
                        </button>
                      </li>
                      <li className="mx-2">
                        <button className="text-grey-1 bg-transparent border-0 rounded-circle">
                          2
                        </button>
                      </li>
                      <li className="mx-2">
                        <button className="text-grey-1 bg-transparent border-0 rounded-circle">
                          3
                        </button>
                      </li>
                      <li className="mx-2">
                        <button className="text-grey-1 bg-transparent border-0 rounded-circle">
                          {">"}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dokumen;
