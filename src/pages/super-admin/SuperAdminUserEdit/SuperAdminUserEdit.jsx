import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  getDesaByKecamatan,
  getKabupaten,
  getKecamatan,
  getKecamatanByKabupaten,
} from "../../../store/region/regionAction";
import { getUser, updateUser } from "../../../store/user/userAction";
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

const SuperAdminUserEdit = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { userDetail } = useSelector((state) => state.user);
  const { kabupatenAll, kecamatanAll, desaAll } = useSelector(
    (state) => state.region
  );

  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      kabupatenId: userDetail?.kabupatenId,
      kecamatanId: userDetail?.kecamatanId,
      desaId: userDetail?.desaId,
    },
  });

  const [loading, setLoading] = useState(false);

  const [kabupatenId, setKabupatenId] = useState(null);
  const [kecamatanId, setKecamatanId] = useState(null);
  const [desaId, setDesaId] = useState(null);

  const [KK, setKK] = useState(null);
  const [KTP, setKTP] = useState(null);

  const { id } = params;

  const handleGetUser = async (data) => {
    await dispatch(getUser(data));
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

  const handleUpdateUser = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

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

    data.id = id;

    await dispatch(updateUser(data)).then((res) => {
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
    const data = {
      id: id,
    };

    handleGetUser(data);
    handleGetAllKabupaten();
  }, [id]);

  useEffect(() => {
    if (userDetail) {
      setKabupatenId(userDetail.kabupatenId);
      setKecamatanId(userDetail.kecamatanId);
      setDesaId(userDetail.desaId);
    }
  }, [userDetail]);

  useEffect(() => {
    handleGetKecamatanByKabupaten();

    if (userDetail) {
      setKecamatanId(null);
      setDesaId(null);
      resetField("kecamatanId");
      resetField("desaId");
    }
  }, [kabupatenId]);

  useEffect(() => {
    handleGetDesaByKecamatan();

    if (userDetail) {
      resetField("desaId");
    }
  }, [kecamatanId]);

  return (
    <>
      <SuperAdminDashboard>
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-2 text-heading-3 text-grey-1">Edit user</h3>
              <p className="mb-0 text-body-2 text-grey-3">User / Edit user</p>
            </div>
            <div className="d-flex">
              <Link
                to={`/super-admin/users/${id}`}
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
                      <option value="">---pilih salah satu---</option>
                      {roleAll.map((item, index) => {
                        if (userDetail?.role === item) {
                          return (
                            <option key={index} selected>
                              {item}
                            </option>
                          );
                        } else {
                          return <option key={index}>{item}</option>;
                        }
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
                      defaultValue={userDetail?.name}
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
                      defaultValue={userDetail?.phoneNumber}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      {...register("phoneNumber")}
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
                      defaultValue={userDetail?.nik}
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
                      defaultValue={userDetail?.birthPlace}
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
                      defaultValue={userDetail?.birthDate}
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
                      defaultValue={userDetail?.address}
                      placeholder="Masukkan alamat sesuai KTP"
                      required
                      {...register("address")}
                    />
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
                      onChange={(e) => {
                        setKabupatenId(e.target.value);
                      }}
                    >
                      <option value="">---pilih salah satu---</option>
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
                      onChange={(e) => {
                        setKecamatanId(e.target.value);
                      }}
                    >
                      <option value="">---pilih salah satu---</option>
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
                      onChange={(e) => {
                        setDesaId(e.target.value);
                      }}
                    >
                      <option value="">---pilih salah satu---</option>
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
                      defaultValue={userDetail?.postalCode}
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
                      defaultValue={userDetail?.rtrw.split("/")[0]}
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
                      defaultValue={userDetail?.rtrw.split("/")[1]}
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
                        if (userDetail?.occupation === item) {
                          return (
                            <option value={item} key={index} selected>
                              {item}
                            </option>
                          );
                        } else {
                          return (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          );
                        }
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

export default SuperAdminUserEdit;
