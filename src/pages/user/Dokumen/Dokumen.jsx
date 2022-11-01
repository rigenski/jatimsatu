import React, { useState } from "react";
import Navbar from "src/components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import "./Dokumen.css";

import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@table-library/react-table-library";
import { useEffect } from "react";
import { getAllKependudukan } from "../../../store/kependudukan/kependudukanAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllSosial } from "../../../store/sosial/sosialAction";

const Dokumen = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const theme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns:  320px 260px 200px 320px 260px;
      `,
    },
  ]);

  const { kependudukanAll } = useSelector((state) => state.kependudukan);
  const { sosialAll } = useSelector((state) => state.sosial);

  const [dataAll, setDataAll] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [section, setSection] = useState("kependudukan");
  const [startRange, setStartRange] = useState("");
  const [lastRange, setlastRange] = useState("");

  const nodes = dataAll;
  const rows = params.rows;

  const handleGetKependudukanAll = async (data) => {
    await dispatch(getAllKependudukan(data));

    setDataAll(kependudukanAll);
  };

  const handleGetSosialAll = async (data) => {
    await dispatch(getAllSosial(data));

    setDataAll(sosialAll);
  };

  useEffect(() => {
    const data = {
      searchKey: "name",
      searchValue: searchValue,
      startRange: startRange,
      lastRange: lastRange,
      rows: rows,
    };

    if (section === "kependudukan") {
      handleGetKependudukanAll(data);
    } else if (section === "sosial") {
      handleGetSosialAll(data);
    }
  }, [searchValue, section, startRange, lastRange, rows]);

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
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="mb-3">
                      <label
                        htmlFor="layanan"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Layanan <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="layanan"
                        onChange={(e) => setSection(e.target.value)}
                      >
                        <option value="kependudukan">Kependudukan</option>
                        <option value="sosial">Sosial</option>
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
                        value={startRange}
                        onChange={(e) => setStartRange(e.target.value)}
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
                        value={lastRange}
                        onChange={(e) => setlastRange(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <Table
                      data={{ nodes }}
                      theme={theme}
                      layout={{ custom: true, horizontalScroll: true }}
                      className="border border-grey-2 rounded-2 table-select"
                    >
                      {(tableList) => (
                        <>
                          <Header>
                            <HeaderRow>
                              <HeaderCell className="px-2 py-3 text-grey-1">
                                Nama Dokumen
                              </HeaderCell>
                              {/* <HeaderCell className="px-2 py-3 text-grey-1">
                                Layanan
                              </HeaderCell> */}
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
                            {nodes.map((item) => (
                              <Row key={item.id} item={item}>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.formType.name}
                                </Cell>
                                {/* <Cell className="px-2 py-3 text-grey-1">
                                  {item.createdAt}
                                </Cell> */}
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.createdAt}
                                  <br />
                                  {item.createdAt}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.status === "Disetujui" ? (
                                    <div className="badge badge-primary px-4 text-paragraph-1 text-primary-2 rounded-1">
                                      {item.status}
                                    </div>
                                  ) : item.status === "Diproses" ? (
                                    <div className="badge badge-warning px-4 text-paragraph-1 text-warning rounded-1">
                                      {item.status}
                                    </div>
                                  ) : (
                                    <div className="badge badge-danger px-4 text-paragraph-1 text-danger rounded-1">
                                      {item.status}
                                    </div>
                                  )}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.description}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  <div className="d-flex flex-column">
                                    {item.status === "Disetujui" ? (
                                      <>
                                        <button className="btn mb-2 px-3 py-1 text-white text-nowrap bg-primary-2 rounded-1">
                                          Lihat Dokumen
                                        </button>
                                        <button className="btn px-3 py-1 text-white text-nowrap bg-info rounded-1">
                                          Export PDF
                                        </button>
                                      </>
                                    ) : item.status === "Diproses" ? (
                                      <></>
                                    ) : (
                                      <>
                                        <button className="btn px-3 py-1 text-white text-nowrap bg-orange-2 rounded-1">
                                          Kirim Ulang
                                        </button>
                                      </>
                                    )}
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
                    <Link
                      to={`/dokumen/${rows > 1 ? parseInt(rows) - 1 : 1}`}
                      className="bg-transparent border-0"
                    >
                      <Icon
                        icon="dashicons:arrow-left-alt2"
                        width={24}
                        height={24}
                        color="#474747"
                      />
                    </Link>
                    <Link
                      to={`/dokumen/${rows ? parseInt(rows) + 1 : 1}`}
                      className="bg-transparent border-0"
                    >
                      <Icon
                        icon="dashicons:arrow-right-alt2"
                        width={24}
                        height={24}
                        color="#474747"
                      />
                    </Link>
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
