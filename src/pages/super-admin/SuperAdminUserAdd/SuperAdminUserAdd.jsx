import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  getDesaByKecamatan,
  getKabupaten,
  getKecamatan,
  getKecamatanByKabupaten,
  getProvinsi,
} from "../../../store/region/regionAction";
import { createUser } from "../../../store/user/userAction";
import { storage } from "src/config/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import uuid from "react-uuid";

const pekerjaanAll = [
  "PNS",
  "Wirausaha",
  "Wiraswasta",
  "Guru",
  "Petani",
  "Dokter",
  "Pelajar",
  "Lainya",
];

const roleAll = ["SUPER_ADMIN", "ADMIN", "PENDUDUK"];

const SuperAdminUserAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();

  const { provinsiAll, kabupatenAll, kecamatanAll, desaAll } = useSelector(
    (state) => state.region
  );

  const [loading, setLoading] = useState(false);

  const [kabupatenId, setKabupatenId] = useState(null);
  const [kecamatanId, setKecamatanId] = useState(null);

  const [KK, setKK] = useState(null);
  const [KTP, setKTP] = useState(null);

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

  const handleAddUser = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    if (KK) {
      const KKSelected = KK.files[0];

      const storageRef = ref(storage, `documents/kk/${KKSelected.name}`);

      uploadBytes(storageRef, KKSelected).then(() => {
        KKSelected.value = "";
      });

      data.kartuKeluargaURL = `${uuid()}-${KKSelected.name}`;
    }

    if (KTP) {
      const KTPSelected = KTP.files[0];
      const storageRef = ref(storage, `documents/ktp/${KTPSelected.name}`);

      uploadBytes(storageRef, KTPSelected).then(() => {
        KTPSelected.value = "";
      });

      data.ktpURL = `${uuid()}-${KTPSelected.name}`;
    }

    await dispatch(createUser(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        setLoading(false);

        navigate("/super-admin/users");
      } else {
        toast.error(res.payload.response.data.message);

        setLoading(false);
      }
    });
  };

  useEffect(() => {
    handleGetAllProvinsi();
    handleGetAllKabupaten();
  }, []);

  useEffect(() => {
    handleGetKecamatanByKabupaten();

    setKecamatanId(null);
    resetField("kecamatanId");
    resetField("desaId");
  }, [kabupatenId]);

  useEffect(() => {
    handleGetDesaByKecamatan();

    resetField("desaId");
  }, [kecamatanId]);

  return (
    <>
      <SuperAdminDashboard>
        <form onSubmit={handleSubmit(handleAddUser)}>
          <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-2 text-heading-3 text-grey-1">Tambah user</h3>
              <p className="mb-0 text-body-2 text-grey-3">User / Tambah user</p>
            </div>
            <div className="d-flex">
              <Link
                to="/super-admin/users"
                className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="btn w-auto px-2 text-white bg-primary-2 text-center border-0 rounded-1"
                disabled={loading}
              >
                Simpan
              </button>
            </div>
          </div>
          <div className="card mb-4 w-100">
            <div className="card-body p-lg-4">
              <div className="row">
                <div className="col-12">
                  <div>
                    <label
                      htmlFor="tipe-user"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Tipe User <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="tipe-user"
                      required
                      {...register("role")}
                    >
                      {roleAll.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 w-100">
            <div className="card-body p-lg-4">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nama"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Nama <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      {...register("name")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="no-hp"
                      className="form-label text-body-3 text-grey-1"
                    >
                      No. HP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="no-hp"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      {...register("phoneNumber")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="pasword"
                      className="form-control"
                      id="password"
                      placeholder="Masukkan password"
                      required
                      {...register("password")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Konfirmasi Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="pasword"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Masukkan ulang password"
                      required
                      {...register("confirmPassword")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
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
                      placeholder="Masukkan nomor hp"
                      required
                      {...register("nik")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="kk"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Upload KK <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="ktp"
                      onChange={(e) => setKK(e.target)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="ktp"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Upload KTP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="ktp"
                      onChange={(e) => setKTP(e.target)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="tempat-lahir"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Tempat Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tempat-lahir"
                      placeholder="Masukkan tempat lahir sesuai KTP"
                      required
                      {...register("birthPlace")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="tanggal-lahir"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Tanggal Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="tanggal-lahir"
                      required
                      {...register("birthDate")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="alamat"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Alamat <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alamat"
                      placeholder="Masukkan alamat sesuai KTP"
                      required
                      {...register("address")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="provinsi"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Provinsi <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="provinsi"
                      required
                      {...register("provinsiId")}
                    >
                      <option value="">---pilih salah satu---</option>
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
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="kabupaten"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Kabupaten <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="kabupaten"
                      required
                      {...register("kabupatenId")}
                      onChange={(e) => setKabupatenId(e.target.value)}
                    >
                      <option value="">---pilih salah satu---</option>
                      {kabupatenAll.map((item, index) => {
                        return (
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="kecamatan"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Kecamatan <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="kecamatan"
                      required
                      {...register("kecamatanId")}
                      onChange={(e) => setKecamatanId(e.target.value)}
                    >
                      <option value="">---pilih salah satu---</option>
                      {kecamatanAll.map((item, index) => {
                        return (
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="desa"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Desa <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="desa"
                      required
                      {...register("desaId")}
                    >
                      <option value="">---pilih salah satu---</option>
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
                <div className="col-12 col-md-6">
                  <div className="mb-3 mb-md-0">
                    <label
                      htmlFor="kode-pos"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Kode Pos <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kode-pos"
                      placeholder="Masukkan kode pos "
                      {...register("postalCode")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="rt"
                      className="form-label text-body-3 text-grey-1"
                    >
                      RT <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rt"
                      placeholder="Masukkan RT sesuai KTP"
                      required
                      {...register("rt")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="rw"
                      className="form-label text-body-3 text-grey-1"
                    >
                      RW <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rw"
                      placeholder="Masukkan RW sesuai KTP"
                      required
                      {...register("rw")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <label
                      htmlFor="pekerjaan"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Pekerjaan <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="pekerjaan"
                      required
                      {...register("occupation")}
                    >
                      <option value="">---pilih salah satu---</option>
                      {pekerjaanAll.map((item, index) => {
                        return (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminUserAdd;
