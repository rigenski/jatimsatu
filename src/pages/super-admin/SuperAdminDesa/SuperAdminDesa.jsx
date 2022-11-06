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
import {
  deleteManyDesa,
  getDesa,
  getKabupaten,
  getKecamatanByKabupaten,
  getProvinsi,
} from "../../../store/region/regionAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const searchFilters = [
  {
    id: "name",
    name: "Desa",
  },
  {
    id: "kecamatan.name",
    name: "Kecamatan",
  },
  {
    id: "kabupaten.name",
    name: "Kabupaten",
  },
  {
    id: "provinsi.name",
    name: "Provinsi",
  },
];

const SuperAdminDesa = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const cursor = queryParams.get("cursor");
  const cursorDirection = queryParams.get("cursorDirection");

  const { provinsiAll, kabupatenAll, kecamatanAll, desaAll } = useSelector(
    (state) => state.region
  );
  const [dataDetail, setDataDetail] = useState(null);

  const [searchValue, setSearchValue] = useState("");
  const [searchFilterId, setSearchFilterId] = useState(searchFilters[0].id);

  const [kecamatanIds, setKecamatanIds] = useState(
    new Array(kecamatanAll.length).fill(false)
  );

  const [kabupatenId, setKabupatenId] = useState(null);

  const nodes = desaAll;

  const select = useRowSelect({ nodes });

  const theme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns:  40px 320px 320px 320px 320px 240px;
      `,
    },
  ]);

  const handleGetAllDesa = async (data) => {
    await dispatch(getDesa(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setDataDetail(res.payload.content);
      }
    });
  };

  const handleGetAllProvinsi = async () => {
    await dispatch(getProvinsi());
  };

  const handleGetAllKabupaten = async () => {
    await dispatch(getKabupaten());
  };

  const handleGetKecamatanByKabupaten = async () => {
    const data = {
      kabupatenId: kabupatenId,
    };

    await dispatch(getKecamatanByKabupaten(data));
  };

  const handleDeleteManyDesa = async (data) => {
    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(deleteManyDesa(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        const dataJSON = {
          searchKey: "name",
          searchValue: searchValue,
          cursor: cursor,
          cursorDirection: cursorDirection,
        };

        handleGetAllDesa(dataJSON);
      } else {
        toast.error(res.payload.response.data.message);
      }
    });
  };

  useEffect(() => {
    const data = {
      searchKey: searchFilterId,
      searchValue: searchValue,
      cursor: cursor,
      cursorDirection: cursorDirection,
    };

    handleGetAllDesa(data);
  }, [searchValue, cursor, cursorDirection, searchFilterId]);

  const handleChangeKecamatanIds = (position) => {
    const checkedUpdated = kecamatanIds.map((item, index) =>
      index === position ? !item : item
    );

    setKecamatanIds(checkedUpdated);
  };

  useEffect(() => {
    handleGetAllProvinsi();
    handleGetAllKabupaten();
  }, []);

  useEffect(() => {
    handleGetKecamatanByKabupaten();
  }, [kabupatenId]);

  useEffect(() => {
    setKecamatanIds(new Array(kecamatanAll.length).fill(false));
  }, [kecamatanAll]);

  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Desa</h3>
            <p className="mb-0 text-body-2 text-grey-3">Kelola data desa</p>
          </div>
          <div className="d-flex">
            <Link
              to="/super-admin/desa/add"
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
                        placeholder="Cari desa"
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
                            Nama desa
                          </HeaderCell>
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
                              {item.name}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.kecamatan.name}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.kabupaten.name}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              {item.provinsi.name}
                            </Cell>
                            <Cell className="px-2 py-3 text-grey-1">
                              <Link
                                to={`/super-admin/desa/${item.id}/edit`}
                                className="btn me-2 px-3 py-1 text-white text-nowrap bg-primary-2 rounded-1"
                              >
                                Edit
                              </Link>
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
                        `/super-admin/users?cursor=${dataDetail?.previousCursor}&cursorDirection=previous`
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
                        `/super-admin/users?cursor=${dataDetail?.nextCursor}&cursorDirection=next`
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
        </div>
      </SuperAdminDashboard>
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
                <p className="mb-2 text-paragraph-1 text-grey-1">Provinsi</p>
                <select className="form-select w-100">
                  <option value="">Semua Provinsi</option>
                  {provinsiAll.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3 border-bottom border-grey-4"></div>
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Kabupaten</p>
                <select
                  className="form-select w-100"
                  onChange={(e) => {
                    setKabupatenId(
                      e.target.value !== "" ? e.target.value : null
                    );
                  }}
                >
                  <option value="">Semua Kabupaten</option>
                  {kabupatenAll.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3 border-bottom border-grey-4"></div>
              <div className="mb-2">
                <p className="mb-2 text-paragraph-1 text-grey-1">Kecamatan</p>
                <div className="row">
                  {kecamatanAll.map((item, index) => {
                    return (
                      <div className="col-12 col-sm-6" key={index}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="status-type"
                            value={item.id}
                            onChange={() => handleChangeKecamatanIds(index)}
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
                Apakah anda yakin untuk hapus desa ini?
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
                      handleDeleteManyDesa({ ids: select.state.ids })
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
    </>
  );
};

export default SuperAdminDesa;
