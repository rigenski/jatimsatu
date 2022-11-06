import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";

import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatsKependudukan,
  getStatsSosial,
  getStatsUser,
} from "../../../store/stats/statsAction";
import { useEffect } from "react";
import {
  getDesaByKecamatan,
  getKabupaten,
  getKecamatanByKabupaten,
  getProvinsi,
} from "../../../store/region/regionAction";

const SuperAdminHome = () => {
  const dispatch = useDispatch();

  const { statsUser, statsKependudukan, statsSosial } = useSelector(
    (state) => state.stats
  );
  const { provinsiAll, kabupatenAll, kecamatanAll, desaAll } = useSelector(
    (state) => state.region
  );

  const [provinsiId, setProvinsiId] = useState(null);
  const [kabupatenId, setKabupatenId] = useState(null);
  const [kecamatanId, setKecamatanId] = useState(null);
  const [desaId, setDesaId] = useState(null);

  const pendudukChart = {
    series: [
      statsUser ? statsUser.statsByAmount["Penduduk Meninggal"] : 0,
      statsUser ? statsUser.statsByAmount["Pertumbuhan Penduduk"] : 0,
      statsUser
        ? statsUser.statsByAmount["Penduduk yang menikah dan cerai"]
        : 0,
      statsUser ? statsUser.statsByAmount["Jumlah Penduduk Aktif"] : 0,
    ],
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
        "Jumlah Penduduk Aktif",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 320,
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
    series: [
      statsUser ? statsUser?.statsByJob["PNS"] : 0,
      statsUser ? statsUser?.statsByJob["Wirausaha"] : 0,
      statsUser ? statsUser?.statsByJob["Wiraswasta"] : 0,
      statsUser ? statsUser?.statsByJob["Guru"] : 0,
      statsUser ? statsUser?.statsByJob["Petani"] : 0,
      statsUser ? statsUser?.statsByJob["Dokter"] : 0,
      statsUser ? statsUser?.statsByJob["Pelajar"] : 0,
      statsUser ? statsUser?.statsByJob["Lainnya"] : 0,
    ],
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
        "PNS",
        "Wirausaha",
        "Wiraswasta",
        "Guru",
        "Petani",
        "Dokter",
        "Pelajar",
        "Lainnya",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 320,
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
    series: [
      statsUser?.statsByAge["Anak-anak"],
      statsUser?.statsByAge["Remaja"],
      statsUser?.statsByAge["Dewasa"],
      statsUser?.statsByAge["Lainnya"],
    ],
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
              width: 320,
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
        name: "Perubahan Status Pendidikan",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["Perubahan Status Pendidikan"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Maret"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["April"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Mei"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juni"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juli"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["Perubahan Status Pendidikan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["Perubahan Status Pendidikan"]
            : 0,
          ,
        ],
      },
      {
        name: "Perubahan Status Kependudukan",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["Perubahan Status Kependudukan"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Maret"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["April"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Mei"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juni"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juli"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["Perubahan Status Kependudukan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["Perubahan Status Kependudukan"]
            : 0,
          ,
        ],
      },
      {
        name: "Perubahan Status Pekerjaan",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["Perubahan Status Pekerjaan"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Maret"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["April"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Mei"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juni"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juli"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["Perubahan Status Pekerjaan"]
            : 0,
          ,
        ],
      },
      {
        name: "Kartu Keluarga",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["Kartu Keluarga"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["Kartu Keluarga"]
            : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["Kartu Keluarga"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["Kartu Keluarga"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["Kartu Keluarga"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["Kartu Keluarga"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["Kartu Keluarga"] : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["Kartu Keluarga"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["Kartu Keluarga"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["Kartu Keluarga"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["Kartu Keluarga"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["Kartu Keluarga"]
            : 0,
          ,
        ],
      },
      {
        name: "Daftar KTP",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["Daftar KTP"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["September"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["Daftar KTP"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["Daftar KTP"] : 0,
          ,
        ],
      },
      {
        name: "Surat Jalan",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["Surat Jalan"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["September"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["Surat Jalan"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["Surat Jalan"] : 0,
          ,
        ],
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
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
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
        name: "Penyaluran Subsidi",
        data: [
          statsSosial ? statsSosial["Januari"]["Penyaluran Subsidi"] : 0,
          statsSosial ? statsSosial["Februari"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["April"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["September"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["November"]["Penyaluran Subsidi"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["Penyaluran Subsidi"] : 0,
          ,
        ],
      },
      {
        name: "KIS",
        data: [
          statsSosial ? statsSosial["Januari"]["KIS"] : 0,
          statsSosial ? statsSosial["Februari"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["April"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["September"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["November"]["KIS"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["KIS"] : 0,
          ,
        ],
      },
      {
        name: "KIP",
        data: [
          statsSosial ? statsSosial["Januari"]["KIP"] : 0,
          statsSosial ? statsSosial["Februari"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["April"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["September"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["November"]["KIP"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["KIP"] : 0,
          ,
        ],
      },
      {
        name: "Bantuan Bencana",
        data: [
          statsSosial ? statsSosial["Januari"]["Bantuan Bencana"] : 0,
          statsSosial ? statsSosial["Februari"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["April"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["September"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["November"]["Bantuan Bencana"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["Bantuan Bencana"] : 0,
          ,
        ],
      },
      {
        name: "Bantuan Sosial",
        data: [
          statsSosial ? statsSosial["Januari"]["Bantuan Sosial"] : 0,
          statsSosial ? statsSosial["Februari"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["April"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["September"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["November"]["Bantuan Sosial"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["Bantuan Sosial"] : 0,
          ,
        ],
      },
      {
        name: "BPJS",
        data: [
          statsSosial ? statsSosial["Januari"]["BPJS"] : 0,
          statsSosial ? statsSosial["Februari"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["April"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["September"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["November"]["BPJS"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["BPJS"] : 0,
          ,
        ],
      },
      {
        name: "BLT",
        data: [
          statsSosial ? statsSosial["Januari"]["BLT"] : 0,
          statsSosial ? statsSosial["Februari"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["April"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["September"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["November"]["BLT"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["BLT"] : 0,
          ,
        ],
      },
      {
        name: "Kartu Prakerja",
        data: [
          statsSosial ? statsSosial["Januari"]["Kartu Prakerja"] : 0,
          statsSosial ? statsSosial["Februari"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Maret"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["April"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Mei"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Juni"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Juli"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Agustus"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["September"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Oktober"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["November"]["Kartu Prakerja"] : 0,
          ,
          statsSosial ? statsSosial["Desember"]["Kartu Prakerja"] : 0,
          ,
        ],
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
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
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

  const keteranganChart = {
    series: [
      {
        name: "SK Duda/Janda",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["SK Duda/Janda"] : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["SK Duda/Janda"]
            : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["SK Duda/Janda"]
            : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["SK Duda/Janda"] : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["SK Duda/Janda"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["SK Duda/Janda"]
            : 0,
          ,
        ],
      },
      {
        name: "SK Cerai",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["SK Cerai"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["September"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["SK Cerai"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["SK Cerai"] : 0,
          ,
        ],
      },
      {
        name: "SK Pindah/datang",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["SK Pindah/datang"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Maret"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["April"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Pindah/datang"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Pindah/datang"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Pindah/datang"] : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["SK Pindah/datang"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["SK Pindah/datang"]
            : 0,
          ,
        ],
      },
      {
        name: "SK Meninggal",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["SK Meninggal"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["SK Meninggal"] : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["SK Meninggal"]
            : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["SK Meninggal"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["SK Meninggal"] : 0,
          ,
        ],
      },
      {
        name: "Surat Keterangan Domisili",
        data: [
          statsKependudukan
            ? statsKependudukan["Januari"]["Surat Keterangan Domisili"]
            : 0,
          statsKependudukan
            ? statsKependudukan["Februari"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Maret"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["April"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Mei"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juni"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Juli"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Agustus"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["September"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Oktober"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["November"]["Surat Keterangan Domisili"]
            : 0,
          ,
          statsKependudukan
            ? statsKependudukan["Desember"]["Surat Keterangan Domisili"]
            : 0,
          ,
        ],
      },
      {
        name: "SK Lahir",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["SK Lahir"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["September"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["SK Lahir"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["SK Lahir"] : 0,
          ,
        ],
      },
      {
        name: "SK Menikah",
        data: [
          statsKependudukan ? statsKependudukan["Januari"]["SK Menikah"] : 0,
          statsKependudukan ? statsKependudukan["Februari"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Maret"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["April"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Mei"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juni"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Juli"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Agustus"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["September"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Oktober"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["November"]["SK Menikah"] : 0,
          ,
          statsKependudukan ? statsKependudukan["Desember"]["SK Menikah"] : 0,
          ,
        ],
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

  const handleGetDesaByKecamatan = async () => {
    const data = {
      kecamatanId: kecamatanId,
    };

    await dispatch(getDesaByKecamatan(data));
  };

  const handleGetStatsUser = async (data) => {
    await dispatch(getStatsUser(data));
  };

  const handleGetStatsKependudukan = async (data) => {
    await dispatch(getStatsKependudukan(data));
  };

  const handleGetStatsSosial = async (data) => {
    await dispatch(getStatsSosial(data));
  };

  useEffect(() => {
    handleGetAllProvinsi();
    handleGetAllKabupaten();
  }, []);

  useEffect(() => {
    handleGetKecamatanByKabupaten();

    setKecamatanId(null);
    setDesaId(null);
  }, [kabupatenId]);

  useEffect(() => {
    handleGetDesaByKecamatan();

    setDesaId(null);
  }, [kecamatanId]);

  useEffect(() => {
    let dataStatsUser;
    let dataStatsKependudukan;
    let dataStatsSosial;

    if (desaId) {
      dataStatsKependudukan = {
        filters: JSON.stringify({
          desaId: desaId,
        }),
      };

      dataStatsSosial = {
        filters: JSON.stringify({
          desaId: desaId,
        }),
      };
    } else if (kecamatanId) {
      dataStatsKependudukan = {
        filters: JSON.stringify({
          kecamatanId: kecamatanId,
        }),
      };

      dataStatsSosial = {
        filters: JSON.stringify({
          kecamatanId: kecamatanId,
        }),
      };
    } else if (kabupatenId) {
      dataStatsKependudukan = {
        filters: JSON.stringify({
          kabupatenId: kabupatenId,
        }),
      };

      dataStatsSosial = {
        filters: JSON.stringify({
          kabupatenId: kabupatenId,
        }),
      };
    } else if (provinsiId) {
      dataStatsKependudukan = {
        filters: JSON.stringify({
          provinsiId: provinsiId,
        }),
      };

      dataStatsSosial = {
        filters: JSON.stringify({
          provinsiId: provinsiId,
        }),
      };
    } else {
      dataStatsKependudukan = {
        filters: null,
      };

      dataStatsSosial = {
        filters: null,
      };
    }

    if (provinsiId) {
      dataStatsUser = {
        filters: JSON.stringify({
          provinsiId: provinsiId,
        }),
      };
    } else {
      dataStatsUser = {
        filters: null,
      };
    }

    handleGetStatsUser(dataStatsUser);
    handleGetStatsKependudukan(dataStatsKependudukan);
    handleGetStatsSosial(dataStatsSosial);
  }, [provinsiId, kabupatenId, kecamatanId, desaId]);

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
            <select
              className="form-select ps-5 w-auto max-w-normal"
              onChange={(e) => {
                setProvinsiId(e.target.value !== "" ? e.target.value : null);
              }}
            >
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
        </div>
        <div className="row">
          <div className="col-12 col-xl-4 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4 d-flex justify-content-center">
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
                <div className="mb-4 d-flex justify-content-center">
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
                <div className="mb-4 d-flex justify-content-center">
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
                <div className="mb-4 d-flex flex-column justify-content-between flex-lg-row">
                  <p className="mb-3 text-body-1 text-grey-1 mb-md-0">
                    Layanan Kependudukan
                  </p>
                  <div className="d-flex align-items-center flex-column flex-md-row">
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKabupatenId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kabupaten</option>
                        {kabupatenAll.map((item, index) => {
                          if (kabupatenId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKecamatanId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kecamatan</option>
                        {kecamatanAll.map((item, index) => {
                          if (kecamatanId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon position-relative">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setDesaId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Desa</option>
                        {desaAll.map((item, index) => {
                          if (desaId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
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
                <div className="mb-4 d-flex flex-column justify-content-between flex-lg-row">
                  <p className="mb-3 text-body-1 text-grey-1 mb-md-0">
                    Layanan Sosial
                  </p>
                  <div className="d-flex align-items-center flex-column flex-md-row">
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKabupatenId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kabupaten</option>
                        {kabupatenAll.map((item, index) => {
                          if (kabupatenId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKecamatanId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kecamatan</option>
                        {kecamatanAll.map((item, index) => {
                          if (kecamatanId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon position-relative">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setDesaId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Desa</option>
                        {desaAll.map((item, index) => {
                          if (desaId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
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
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body p-lg-4">
                <div className="mb-4 d-flex flex-column justify-content-between flex-lg-row">
                  <p className="mb-3 text-body-1 text-grey-1 mb-md-0">
                    Surat Keterangan
                  </p>
                  <div className="d-flex align-items-center flex-column flex-md-row">
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKabupatenId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kabupaten</option>
                        {kabupatenAll.map((item, index) => {
                          if (kabupatenId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon me-2 mb-2 position-relative mb-md-0">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setKecamatanId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Kecamatan</option>
                        {kecamatanAll.map((item, index) => {
                          if (kecamatanId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="form-icon position-relative">
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#474747"
                        className="position-absolute "
                      />
                      <select
                        className="form-select ps-5 w-auto max-w-normal"
                        onChange={(e) => {
                          setDesaId(
                            e.target.value !== "" ? e.target.value : null
                          );
                        }}
                      >
                        <option value="">Semua Desa</option>
                        {desaAll.map((item, index) => {
                          if (desaId === item.id) {
                            return (
                              <option value={item.id} key={index} selected>
                                {item.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <Chart
                    options={keteranganChart.options}
                    series={keteranganChart.series}
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

export default SuperAdminHome;
