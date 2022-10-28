import { Icon } from "@iconify/react";
import React from "react";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";

import Chart from "react-apexcharts";

const pendudukChart = {
  series: [22, 44, 34],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: [
      "Penduduk Meninggal",
      "Pertambahan Penduduk",
      "Penduduk yang menikah dan cerai",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const profesiChart = {
  series: [10, 20, 40, 30],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: ["Pegawai Swasta", "Guru", "PNS", "Lainnya"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const umurChart = {
  series: [20, 40, 30, 10],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: ["Anak-anak", "Remaja", "Dewasa", "Lainnya"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const kependudukanChart = {
  series: [
    {
      name: "Daftar KTP",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Kartu Keluaga",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "E-Signature",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
    {
      name: "Surat Keterangan",
      data: [24, 57, 80, 99, 75, 38, 24, 47, 82, 46, 12, 24],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Juni",
        "Juli",
        "Agust",
        "Sept",
        "Okto",
        "Nov",
        "Des",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  },
};

const sosialChart = {
  series: [
    {
      name: "BPJS",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Bantuan Sosial",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "KIP",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
    {
      name: "KIS",
      data: [81, 52, 74, 99, 25, 38, 62, 47, 82, 56, 45, 47],
    },
    {
      name: "Bantuan Sosial",
      data: [87, 57, 74, 99, 65, 38, 92, 47, 82, 56, 45, 47],
    },
    {
      name: "BLT",
      data: [87, 57, 74, 99, 75, 38, 22, 47, 82, 56, 45, 47],
    },
    {
      name: "Bantuan  Bencana",
      data: [23, 57, 74, 87, 75, 38, 62, 47, 82, 24, 45, 47],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Juni",
        "Juli",
        "Agust",
        "Sept",
        "Okto",
        "Nov",
        "Des",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  },
};

const AdminHome = () => {
  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">
              Selamat datang di Jatimku
            </h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Kamu sedang masuk ke halaman Desa Bacem, Sutojayan, Blitar
            </p>
          </div>
          <div className="form-icon position-relative">
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
        </div>
        <div className="row">
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4">
                  <Chart
                    options={pendudukChart.options}
                    series={pendudukChart.series}
                    type="pie"
                    width={380}
                  />
                </div>
                <p className="mb-0 text-body-1 text-grey-1">Jumlah Penduduk</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4">
                  <Chart
                    options={profesiChart.options}
                    series={profesiChart.series}
                    type="pie"
                    width={380}
                  />
                </div>
                <p className="mb-0 text-body-1 text-grey-1">Profesi</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4">
                  <Chart
                    options={umurChart.options}
                    series={umurChart.series}
                    type="pie"
                    width={380}
                  />
                </div>
                <p className="mb-0 text-body-1 text-grey-1">Umur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4 d-flex justify-content-between ">
                  <p className="mb-0 text-body-1 text-grey-1">
                    Layanan Kependudukan
                  </p>
                  <div className="form-icon position-relative">
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
                </div>
                <div>
                  <Chart
                    options={kependudukanChart.options}
                    series={kependudukanChart.series}
                    type="line"
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4 d-flex justify-content-between ">
                  <p className="mb-0 text-body-1 text-grey-1">Layanan Sosial</p>
                  <div className="form-icon position-relative">
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
                </div>
                <div>
                  <Chart
                    options={sosialChart.options}
                    series={sosialChart.series}
                    type="line"
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SuperAdminDashboard>
    </>
  );
};

export default AdminHome;
