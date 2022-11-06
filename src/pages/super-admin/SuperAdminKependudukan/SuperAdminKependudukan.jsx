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
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { getDesa } from "../../../store/region/regionAction";

const searchFilters = [
  {
    id: "formType.name",
    name: "Nama",
  },
  {
    id: "description",
    name: "Keterangan",
  },
];

const dokumenTypes = [
  {
    id: "0cd3c8fd-ce1d-4736-97d2-ad243974c417",
    name: "SK Duda/Janda",
  },
  {
    id: "1f3a348d-af77-424a-a2a2-636b47382599",
    name: "Perubahan Status Pendidikan",
  },
  {
    id: "35b57cc0-56e9-435c-9508-b4102d6ad5f1",
    name: "SK Cerai",
  },
  {
    id: "3e4a7a04-c680-4639-a3ee-a7d6be5bf673",
    name: "SK Pindah/datang",
  },
  {
    id: "4278c144-8951-40c6-93d7-80736e509baf",
    name: "Perubahan Status Kependudukan",
  },
  {
    id: "56ebfd26-63c5-4fea-893c-176473c38968",
    name: "SK Meninggal",
  },
  {
    id: "88bff511-5786-4a34-ad46-b7dbed19fd96",
    name: "Perubahan Status Pekerjaan",
  },
  {
    id: "8dba0dda-9fd4-4cfe-9038-91620918c0d2",
    name: "Kartu Keluarga",
  },
  {
    id: "91a35f21-bf13-45d2-96da-0a76089f8f71",
    name: "Surat Keterangan Domisili",
  },
  {
    id: "969ba0c8-3e65-4d3b-8bf6-dd998c4230cb",
    name: "SK Lahir",
  },
  {
    id: "9b6d0e7e-0bd7-4504-9483-a4e55ccf60ec",
    name: "Daftar KTP",
  },
  {
    id: "9ea5d289-42d8-4c52-a51a-3153a3aad4ea",
    name: "SK Menikah",
  },
  {
    id: "a70dbb0e-ac27-4caf-b36b-6d28e23a9395",
    name: "Surat Jalan",
  },
];

const statusTypes = [
  {
    id: "Disetujui",
    name: "Disetujui",
  },
  {
    id: "Ditotak",
    name: "Ditotak",
  },
];

const SuperAdminKependudukan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const cursor = queryParams.get("cursor");
  const cursorDirection = queryParams.get("cursorDirection");

  const { kependudukanAll } = useSelector((state) => state.kependudukan);
  const { desaAll } = useSelector((state) => state.region);

  const [dataDetail, setDataDetail] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const [desaId, setDesaId] = useState(null);
  const [searchFilterId, setSearchFilterId] = useState(searchFilters[0].id);
  const [dokumenTypeIds, setDokumenTypeIds] = useState(
    new Array(dokumenTypes.length).fill(false)
  );
  const [statusTypeIds, setStatusTypeIds] = useState(
    new Array(statusTypes.length).fill(false)
  );
  const [dateRange, setDateRange] = useState([null, null]);

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
    await dispatch(getAllKependudukan(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setDataDetail(res.payload.content);
      }
    });
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
          endRange: null,
          rows: null,
          cursor: null,
        };

        handleGetAllKependudukan(data);
      } else {
        toast.error(res.payload.response.data.message);
      }
    });
  };

  const handleChangeDokumenTypeIds = (position) => {
    const checkedUpdated = dokumenTypeIds.map((item, index) =>
      index === position ? !item : item
    );

    setDokumenTypeIds(checkedUpdated);
  };

  const handleChangeStatusTypeIds = (position) => {
    const checkedUpdated = statusTypeIds.map((item, index) =>
      index === position ? !item : item
    );

    setStatusTypeIds(checkedUpdated);
  };

  const handleGetAllDesa = async (data) => {
    await dispatch(getDesa(data));
  };

  useEffect(() => {
    const data = {
      searchKey: searchFilterId,
      searchValue: searchValue,
      startRange: null,
      endRange: null,
      cursor: cursor,
      cursorDirection: cursorDirection,
      filters: desaId
        ? JSON.stringify({
            desaId: { values: [desaId] },
          })
        : null,
    };

    handleGetAllKependudukan(data);
  }, [
    searchValue,
    cursor,
    cursorDirection,
    searchFilterId,
    searchFilterId,
    desaId,
  ]);

  useEffect(() => {
    const data = {
      searchKey: null,
      searchValue: null,
      cursor: null,
      cursorDirection: null,
    };

    handleGetAllDesa(data);
  }, []);

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
              <select
                className="form-select ps-5 w-auto max-w-normal"
                onChange={(e) => {
                  setDesaId(e.target.value !== "" ? e.target.value : null);
                }}
              >
                <option value="">Semua Desa</option>
                {desaAll.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
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
                <div className="d-flex align-items-center">
                  <select
                    className="form-select w-auto max-w-normal"
                    onChange={(e) => {
                      setSearchFilterId(
                        e.target.value !== "" ? e.target.value : null
                      );
                    }}
                  >
                    {searchFilters.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
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
              {dataDetail?.previousCursor ? (
                <button
                  className="bg-transparent border-0"
                  disabled={dataDetail?.previousCursor ? false : true}
                  onClick={() =>
                    navigate(
                      `/super-admin/kependudukan?cursor=${dataDetail?.previousCursor}&cursorDirection=previous`
                    )
                  }
                >
                  <Icon
                    icon="dashicons:arrow-left-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
              ) : (
                <button className="bg-transparent border-0" disabled>
                  <Icon
                    icon="dashicons:arrow-left-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
              )}
              {dataDetail?.nextCursor ? (
                <button
                  className="bg-transparent border-0"
                  disabled={dataDetail?.nextCursor ? false : true}
                  onClick={() =>
                    navigate(
                      `/super-admin/kependudukan?cursor=${dataDetail?.nextCursor}&cursorDirection=next`
                    )
                  }
                >
                  <Icon
                    icon="dashicons:arrow-right-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
              ) : (
                <button className="bg-transparent border-0" disabled>
                  <Icon
                    icon="dashicons:arrow-right-alt2"
                    width={24}
                    height={24}
                    color="#474747"
                  />
                </button>
              )}
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
                  {dokumenTypes.map((item, index) => {
                    return (
                      <div className="col-12 col-sm-6" key={index}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="dokumen-type"
                            onChange={() => handleChangeDokumenTypeIds(index)}
                          />
                          <label
                            className="form-check-label ms-1 text-paragraph-2 "
                            htmlFor="daftar-ktp"
                          >
                            {item.name}
                          </label>
                        </div>
                      </div>
                    );
                  })}
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
                      onChange={(e) =>
                        setDateRange([e.target.value, dateRange[1]])
                      }
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="date"
                      className="form-control mb-2"
                      id="tanggal-akhir"
                      onChange={(e) =>
                        setDateRange([dateRange[0], e.target.value])
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 border-bottom border-grey-4"></div>
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Status</p>
                <div className="row">
                  {statusTypes.map((item, index) => {
                    return (
                      <div className="col-12 col-sm-6" key={index}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="status-type"
                            value={item.id}
                            onChange={() => handleChangeStatusTypeIds(index)}
                          />
                          <label
                            className="form-check-label ms-1 text-paragraph-2 "
                            htmlFor="daftar-ktp"
                          >
                            {item.name}
                          </label>
                        </div>
                      </div>
                    );
                  })}
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

export default SuperAdminKependudukan;
