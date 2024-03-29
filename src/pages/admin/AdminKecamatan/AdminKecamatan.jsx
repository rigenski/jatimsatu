import { Icon } from "@iconify/react";
import React from "react";
import AdminDashboard from "src/components/AdminDashboard/AdminDashboard";

import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  CellSelect,
  HeaderCellSelect,
  useRowSelect,
} from "@table-library/react-table-library/select";
import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@table-library/react-table-library";
import { Link } from "react-router-dom";

const sosialData = [
  {
    id: 1,
    kecamatan: "Blitar",
    kabupaten: "Kependudukan",
    provinsi: "Jawa Timur",
  },
  {
    id: 2,
    kecamatan: "Blitar",
    kabupaten: "Kependudukan",
    provinsi: "Jawa Timur",
  },
];

const AdminKecamatan = () => {
  const nodes = sosialData;

  const select = useRowSelect({ nodes });

  const theme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns:  5% 16% 16% 16% minmax(300px, 1fr);
      `,
    },
  ]);

  return (
    <>
      <AdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Kecamatan</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Kelola data kecamatan
            </p>
          </div>
          <div className="d-flex">
            <Link
              to="/admin/kecamatan/add"
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
            </Link>
          </div>
        </div>
        <div className="card w-100">
          <div className="card w-100">
            <div className="card-body p-lg-4">
              <div className="mb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-end">
                <div className="mb-3 mb-lg-0 d-flex align-items-center">
                  <p className="mb-0 text-body-4">
                    {select.state.ids.length} dipilih
                  </p>
                  <button className="ms-4 px-2 bg-transparent border-0">
                    <Icon
                      icon="akar-icons:trash-can"
                      width={24}
                      height={24}
                      color="#E61A1A"
                      className="me-2"
                    />
                    <span className="mb-0 text-body-3 text-danger">
                      Hapus Data
                    </span>
                  </button>
                </div>
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
              <div className="mb-4">
                <Table
                  data={{ nodes }}
                  select={select}
                  theme={theme}
                  layout={{ custom: true, horizontalScroll: true }}
                  className="border border-grey-2 rounded-2 table-select"
                >
                  {(tableList) => (
                    <>
                      <Header>
                        <HeaderRow>
                          <HeaderCellSelect />
                          <HeaderCell className="px-2 py-3 text-grey-1">
                            Kecamatan
                          </HeaderCell>
                          <HeaderCell className="px-2 py-3 text-grey-1">
                            Kabupaten
                          </HeaderCell>
                          <HeaderCell className="px-2 py-3 text-grey-1">
                            Provinsi
                          </HeaderCell>
                          <HeaderCell className="px-2 py-3 text-grey-1">
                            Aksi
                          </HeaderCell>
                        </HeaderRow>
                      </Header>

                      <Body>
                        {tableList.map((item) => (
                          <Row key={item.id} item={item}>
                            <CellSelect item={item} />
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.kecamatan}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.kabupaten}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.provinsi}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              <div>
                                <button className="btn me-2 px-3 py-1 text-white text-nowrap bg-primary-2 rounded-1">
                                  Edit
                                </button>
                                <button className="btn px-3 py-1 text-white text-nowrap bg-danger rounded-1">
                                  Hapus
                                </button>
                              </div>
                            </Cell>
                          </Row>
                        ))}
                      </Body>
                    </>
                  )}
                </Table>
              </div>
              <div className="d-flex justify-content-center">
                <button className="bg-transparent border-0">
                  <Icon
                    icon="dashicons:arrow-left-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
                <button className="bg-transparent border-0">
                  <Icon
                    icon="dashicons:arrow-right-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminDashboard>
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Dokumen</p>
                <div className="row ">
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        Daftar KTP
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        Kartu Keluarga
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        Surat Jalan
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Lahir
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Meninggal
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Pindah/datang
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Duda/Janda
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Lahir
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Menikah
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        SK Cerai
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
                      >
                        Perubahan Status Pendidikan
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="daftar-ktp"
                      />
                      <label
                        className="form-check-label ms-1 text-paragraph-2 "
                        htmlFor="daftar-ktp"
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

export default AdminKecamatan;
