import { Icon } from "@iconify/react";
import React from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  getDesaById,
  getKabupatenById,
  getKecamatanById,
} from "../../../store/region/regionAction";
import { deleteUser, getUser } from "../../../store/user/userAction";

const SuperAdminUserDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { userDetail } = useSelector((state) => state.user);
  const { kabupatenDetail, kecamatanDetail, desaDetail } = useSelector(
    (state) => state.region
  );

  const { id } = params;

  const handleGetUser = async (data) => {
    await dispatch(getUser(data));
  };

  const handleGetKabupatenById = async (data) => {
    await dispatch(getKabupatenById(data));
  };

  const handleGetKecamatanById = async (data) => {
    await dispatch(getKecamatanById(data));
  };

  const handleGetDesaById = async (data) => {
    await dispatch(getDesaById(data));
  };

  const handleDeleteUser = async (data) => {
    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(deleteUser(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        navigate("/super-admin/users");
      } else {
        toast.error(res.payload.response.data.message);
      }
    });
  };

  useEffect(() => {
    const data = {
      id: id,
    };

    handleGetUser(data);
  }, [id]);

  useEffect(() => {
    if (userDetail) {
      handleGetKabupatenById({ id: userDetail?.kabupatenId });
      handleGetKecamatanById({ id: userDetail?.kecamatanId });
      handleGetDesaById({ id: userDetail?.desaId });
    }
  }, [userDetail]);

  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Detail user</h3>
            <p className="mb-0 text-body-2 text-grey-3">User / Detail user</p>
          </div>
          <div className="d-flex">
            <Link
              to={`/super-admin/users/${id}/edit`}
              className="btn me-3 w-auto px-2 text-button text-white bg-primary-2  text-center border-0 rounded-1"
            >
              <Icon
                icon="la:pen"
                width={24}
                height={24}
                color="#FFFFFF"
                className="me-2"
              />
              Edit
            </Link>
            <button
              className="btn w-auto px-2 text-button text-white bg-danger text-center border-0 rounded-1"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
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
                  <select className="form-select" id="tipe-user" disabled>
                    <option>{userDetail?.role}</option>
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
                    disabled
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
                    defaultValue={userDetail?.phoneNumber}
                    disabled
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
                    disabled
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
                    type="text"
                    className="form-control"
                    id="file"
                    defaultValue={userDetail?.kartuKeluargaURL}
                    disabled
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
                    type="text"
                    className="form-control"
                    id="ktp"
                    defaultValue={userDetail?.ktpUrl}
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                  <select className="form-select" id="kabupaten" disabled>
                    <option>{kabupatenDetail?.name}</option>
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
                  <select className="form-select" id="kecamatan" disabled>
                    <option>{kecamatanDetail?.name}</option>
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
                  <select className="form-select" id="desa" disabled>
                    <option>{desaDetail?.name}</option>
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
                    defaultValue={userDetail?.postalCode}
                    disabled
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
                    disabled
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
                    defaultValue={userDetail?.rtrw.split("/")[1]}
                    disabled
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
                  <input
                    type="text"
                    className="form-control"
                    id="pekerjaan"
                    defaultValue={userDetail?.occupation}
                    disabled
                  />
                </div>
              </div>
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
                    onClick={() => handleDeleteUser({ id: userDetail?.id })}
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

export default SuperAdminUserDetail;
