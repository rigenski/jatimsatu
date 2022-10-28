import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import "./Dokumen.css";

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

const sosialData = [
  {
    id: 1,
    dokumen: "Pengajuan Surat Keterangan Daftar KTP",
    layanan: "Sosial",
    tanggal: "15-10-2022",
    waktu: "21:00",
    status: 1,
    keterangan: "Dokumen KK tidak jelas, upload ulang.",
  },
  {
    id: 2,
    dokumen: "Pengajuan Surat Keterangan Daftar KTP",
    layanan: "Sosial",
    tanggal: "15-10-2022",
    waktu: "21:00",
    status: 1,
    keterangan: "Dokumen KK tidak jelas, upload ulang.",
  },
];

const Dokumen = () => {
  const nodes = sosialData;

  const theme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns:  16% 16% 16% 16% 16% minmax(300px, 1fr);
      `,
    },
  ]);

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
                      <select className="form-select" id="layanan">
                        <option>pilih layanan</option>
                        <option>Blitar</option>
                        <option>Malang</option>
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
                              <HeaderCell className="px-2 py-3 text-grey-1">
                                Layanan
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
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.dokumen}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.layanan}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.tanggal}
                                  <br />
                                  {item.waktu}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.status === 1 ? (
                                    <div className="badge px-4 text-paragraph-1 text-primary-2 bg-primary-6 rounded-1">
                                      Disetujui
                                    </div>
                                  ) : null}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  {item.keterangan}
                                </Cell>
                                <Cell className="px-2 py-3 text-grey-1">
                                  <div className="d-flex flex-column">
                                    <button className="btn mb-2 me-2 px-3 py-1 text-white text-nowrap bg-primary-2 rounded-1">
                                      Lihat Dokumen
                                    </button>
                                    <button className="btn px-3 py-1 text-white text-nowrap bg-info rounded-1">
                                      Export PDF
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
                  <div className="pagination d-flex flex-column justify-content-between align-items-center flex-md-row">
                    <div className="mb-3 d-flex align-items-center mb-md-0">
                      <span className="text-body-4 text-black">Show</span>
                      <select className="form-select mx-2">
                        <option>4</option>
                        <option>10</option>
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
