import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";

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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKependudukan,
  getAllKependudukan,
} from "../../../store/kependudukan/kependudukanAction";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const SuperAdminKependudukan = () => {
  const dispatch = useDispatch();

  const { kependudukanAll } = useSelector((state) => state.kependudukan);

  const [searchValue, setSearchValue] = useState("");

  const nodes = kependudukanAll;

  const select = useRowSelect({ nodes });

  const theme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns: 40px 320px 320px 240px 240px 320px 240px;
      `,
    },
  ]);

  const handleGetAllKependudukan = async (data) => {
    await dispatch(getAllKependudukan(data));
  };

  const handleDeleteManyKependudukan = async (data) => {
    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(deleteKependudukan(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        const data = {
          searchKey: "formType.name",
          searchValue: searchValue,
          startRange: null,
          lastRange: null,
          rows: null,
          cursor: null,
        };

        handleGetAllKependudukan(data);
      } else {
        toast.error(res.payload.response.data.message);
      }
    });
  };

  useEffect(() => {
    const data = {
      searchKey: "name",
      searchValue: searchValue,
      startRange: null,
      lastRange: null,
      rows: null,
      cursor: null,
    };

    handleGetAllKependudukan(data);
  }, [searchValue]);

  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Kependudukan</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Kelola data layanan kependudukan
            </p>
          </div>
          <div className="d-flex">
            <div className="form-icon me-3 position-relative">
              <Icon
                icon="ic:outline-holiday-village"
                width={24}
                height={24}
                color="#474747"
                className="position-absolute"
              />
              <select className="form-select ps-5 w-auto" id="desa">
                <option>Blitar</option>
                <option>Malang</option>
              </select>
            </div>
            <button
              className="btn w-auto px-2 text-button text-white bg-primary-2 text-center border-0 rounded"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <Icon
                icon="akar-icons:circle-plus"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Tambah
            </button>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body p-lg-4">
            <div className="mb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-end">
              <div className="mb-3 mb-lg-0 d-flex align-items-center">
                <p className="mb-0 text-body-4">
                  {select.state.ids.length} dipilih
                </p>
                {select.state.ids.length ? (
                  <button
                    className="ms-4 px-2 bg-transparent border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
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
                ) : (
                  <button
                    className="ms-4 px-2 bg-transparent border-0"
                    data-bs-toggle="modal"
                    disabled
                  >
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
                )}
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
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
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
                          Dokumen
                        </HeaderCell>
                        <HeaderCell className="px-2 py-3 text-grey-1">
                          Nama
                        </HeaderCell>
                        <HeaderCell className="px-2 py-3 text-grey-1">
                          Tanggal
                        </HeaderCell>
                        <HeaderCell className="px-2 py-3 text-grey-1">
                          Status
                        </HeaderCell>
                        <HeaderCell className="px-2 py-3 text-grey-1">
                          Keterangan
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
                            {item.formType.name}
                          </Cell>
                          <Cell className="px-2 py-3 text-grey-1">
                            {item.createdBy.name}
                          </Cell>
                          <Cell className="px-2 py-3 text-grey-1">
                            {moment(item.createdAt).format("DD-MM-YYYY")}
                            <br />
                            {moment(item.createdAt).format("HH:mm")}
                          </Cell>
                          <Cell className="px-2 py-3 text-grey-1">
                            {item.status === "Disetujui" ? (
                              <>
                                <div className="badge badge-primary px-4 text-paragraph-1 text-primary-2 rounded-1">
                                  {item.status}
                                </div>
                              </>
                            ) : item.status === "Diproses" ? (
                              <>
                                <div className="badge badge-warning px-4 text-paragraph-1 text-warning rounded-1">
                                  {item.status}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="badge badge-danger px-4 text-paragraph-1 text-danger rounded-1">
                                  {item.status}
                                </div>
                              </>
                            )}
                          </Cell>
                          <Cell className="px-2 py-3 text-grey-1">
                            {item.description}
                          </Cell>
                          <Cell className="px-2 py-3 text-grey-1">
                            <div>
                              <Link
                                to={`/super-admin/kependudukan/${item.id}`}
                                className="btn me-2 px-3 py-1 text-white text-nowrap bg-primary-2 rounded-1"
                              >
                                Lihat
                              </Link>
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
      </SuperAdminDashboard>
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-body">
              <p className="mb-4 text-body-3 text-grey-1 text-center">
                Apakah anda yakin untuk hapus dokumen ini?
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <button
                    className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1"
                    data-bs-dismiss="modal"
                  >
                    Batal
                  </button>
                  <button
                    className="btn w-auto px-2 text-white bg-danger text-center border-0 rounded-1"
                    data-bs-dismiss="modal"
                    onClick={() =>
                      handleDeleteManyKependudukan({ ids: select.state.ids })
                    }
                  >
                    <Icon
                      icon="akar-icons:trash-can"
                      width={24}
                      height={24}
                      color="#FFFFFF"
                      className="me-2"
                    />
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-body">
              <h3 className="mb-2 text-body-3 text-grey-1 text-center">
                Tambah dokumen
              </h3>
              <p className="mb-4 text-paragraph-4 text-grey-1 text-center">
                Apakah anda yakin untuk hapus dokumen ini?
              </p>
              <div className="mb-4">
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
                    placeholder="masukkan NIK terdaftar"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="jenis"
                    className="form-label text-body-3 text-grey-1"
                  >
                    Jenis Dokumen <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="jenis">
                    <option>Pilih Jenis Dokumen</option>
                    <option>Blitar</option>
                    <option>Malang</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <button
                    className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1"
                    data-bs-dismiss="modal"
                  >
                    Batal
                  </button>
                  <button
                    className="btn w-auto px-2 text-button text-white bg-primary-2 text-center border-0 rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <Icon
                      icon="akar-icons:circle-plus"
                      width={24}
                      height={24}
                      color="#FFFFFF"
                      className="me-2"
                    />
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminKependudukan;
