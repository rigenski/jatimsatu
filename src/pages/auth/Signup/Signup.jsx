import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
// style
import "./Signup.css";

// asset
import SendIcon from "src/assets/images/auth/send-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDesaByKecamatan,
  getKabupaten,
  getKecamatanByKabupaten,
  getProvinsi,
} from "../../../store/region/regionAction";
import { storage } from "src/config/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { authRegister } from "../../../store/auth/authAction";
import { Link } from "react-router-dom";

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

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues, resetField } = useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);

  const [kabupatenId, setKabupatenId] = useState(null);
  const [kecamatanId, setKecamatanId] = useState(null);

  const [KK, setKK] = useState(null);
  const [KTP, setKTP] = useState(null);

  const { provinsiAll, kabupatenAll, kecamatanAll, desaAll } = useSelector(
    (state) => state.region
  );

  const handleAuthRegister = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    if (data.password === data.confirmPassword) {
      if (KK) {
        const KKSelected = KK.files[0];
        const storageRef = ref(storage, `documents/${KKSelected.name}`);

        uploadBytes(storageRef, KKSelected).then(() => {
          KKSelected.value = "";
        });

        data.kartuKeluargaURL = `${uuid()}-${KKSelected.name}`;
      }

      if (KTP) {
        const KTPSelected = KTP.files[0];
        const storageRef = ref(storage, `documents/${KTPSelected.name}`);

        uploadBytes(storageRef, KTPSelected).then(() => {
          KTPSelected.value = "";
        });

        data.ktpURL = `${uuid()}-${KTPSelected.name}`;
      }

      await dispatch(authRegister(data)).then((res) => {
        toast.dismiss(loader);

        if (res.meta.requestStatus === "fulfilled") {
          toast.success(res.payload.message);

          setLoading(false);
          setStatus(2);
        } else {
          toast.error(res.payload.response.data.message);

          setLoading(false);
        }
      });
    } else {
      toast.dismiss(loader);
      toast.error("Konfirm Password tidak sama!");

      setLoading(false);
    }
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

  if (status === 1) {
    return (
      <>
        <main>
          <section className="auth register bg-primary-2">
            <div className="container h-100">
              <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
                <div className="card">
                  <div className="register card-body px-3 py-5 p-md-5">
                    <form onSubmit={handleSubmit(handleAuthRegister)}>
                      <div className="mb-4">
                        <h3 className="mb-3 text-heading-3 text-grey-1 text-center">
                          Register
                        </h3>
                        <p className="text-body-2 text-grey-3 text-center">
                          Silahkan melengkapi data pribadi Anda agar data Anda
                          dapat diverifikasi oleh admin kami
                        </p>
                      </div>
                      <div className="mb-4">
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
                                placeholder="Masukkan nomor hp"
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
                                type="password"
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
                                Konfirmasi Password{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Masukkan ulang password"
                                {...register("confirmPassword", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="ktp"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Upload KTP{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="ktp"
                                required
                                onChange={(e) => setKTP(e.target)}
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
                                placeholder="Masukkan nomor induk keluar
                                requiredga"
                                {...register("nik")}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="tempat-lahir"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Tempat Lahir{" "}
                                <span className="text-danger">*</span>
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
                                htmlFor="kk"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Upload KK <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="kk"
                                required
                                onChange={(e) => setKK(e.target)}
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
                                htmlFor="tanggal-lahir"
                                className="form-label text-body-3 text-grey-1"
                              >
                                Tanggal Lahir{" "}
                                <span className="text-danger">*</span>
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
                                required
                                {...register("postalCode")}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
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
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          type="submit"
                          className="btn btn-lg text-button text-white bg-primary-2 text-center border-0 rounded-1"
                          disabled={loading}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  } else if (status === 2) {
    return (
      <>
        <main>
          <section className="auth bg-primary-2">
            <div className="container h-100">
              <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
                <div className="card rounded-4">
                  <div className="card-body px-3 py-5 p-md-5">
                    <form action="">
                      <div className="mb-4">
                        <div className="mb-3 d-flex align-items-center">
                          <Link to="/signin">
                            <Icon
                              icon="ep:back"
                              width={48}
                              height={48}
                              className="me-3"
                              color="#000000"
                            />
                          </Link>
                          <h3 className="mb-0 text-heading-4 text-grey-1">
                            Register
                          </h3>
                        </div>
                        <div>
                          <div className="mb-4 d-flex flex-column align-items-center">
                            <img
                              src={SendIcon}
                              alt=""
                              className="mb-4"
                              height={80}
                              width={80}
                            />
                            <h3 className="mb-2 text-heading-5 text-grey-1 text-center">
                              Link register terkirim
                            </h3>
                            <p className="mb-0 text-paragraph-2 text-grey-2 text-center">
                              Mohon cek whatsapp nomor hp{" "}
                              {getValues("phoneNumber")}, dan klik tautan untuk
                              membuat akun baru.
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default Signup;
