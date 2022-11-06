import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  deleteSosial,
  getSosialById,
} from "../../../store/sosial/sosialAction";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const SuperAdminSosialDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;

  const { sosialDetail } = useSelector((state) => state.sosial);

  const [section, setSection] = useState("formulir-pendaftaran");

  const handleGetSosialById = async (data) => {
    await dispatch(getSosialById(data));
  };

  const handleDeleteManySosial = async (data) => {
    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(deleteSosial(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        navigate("/super-admin/sosial");
      } else {
        toast.error(res.payload.response.data.message);
      }
    });
  };

  const handleDownloadFile = async (data) => {
    const storage = getStorage();
    getDownloadURL(ref(storage, `documents/${data}`)).then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      window.open(url, "_blank");
    });
  };

  useEffect(() => {
    const data = {
      id: id,
    };

    handleGetSosialById(data);
  }, [id]);

  return (
    <>
      <SuperAdminDashboard>
        <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-2 text-heading-3 text-grey-1">Detail dokumen</h3>
            <p className="mb-0 text-body-2 text-grey-3">
              Sosial / Detail dokumen
            </p>
          </div>
        </div>
        <div className="card mb-4 w-100">
          <div className="card-body p-lg-4">
            <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
              <div className="mb-3 mb-lg-0">
                <h5 className="mb-1 text-heading-5 text-grey-1">
                  Surat Pengajuan {sosialDetail?.formType?.name}
                </h5>
                <p className="mb-0 text-paragraph-2 text-grey-3">
                  Sosial / Detail Dokumen
                </p>
              </div>
              <div className="d-flex">
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
            <div className="mb-4">
              <div className="d-flex align-items-center border-bottom border-grey-4">
                <button
                  type="button"
                  className={
                    section === "formulir-pendaftaran"
                      ? "px-3 py-2 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      : "px-3 py-2 text-button text-grey-1 bg-background text-center border-0 rounded-1"
                  }
                  onClick={() => setSection("formulir-pendaftaran")}
                >
                  Formulir Pendaftaran
                </button>
                <button
                  type="button"
                  className={
                    section === "upload-dokumen"
                      ? "ms-2 px-3 py-2 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                      : "ms-2 px-3 py-2 text-button text-grey-1 bg-background text-center border-0 rounded-1"
                  }
                  onClick={() => setSection("upload-dokumen")}
                >
                  Upload Dokumen
                </button>
              </div>
            </div>
            {section === "formulir-pendaftaran" ? (
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
                      defaultValue={sosialDetail?.registrationForm?.name}
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
                      defaultValue={sosialDetail?.registrationForm?.nik}
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
                      defaultValue={sosialDetail?.registrationForm?.alamat}
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
                      <option>{sosialDetail?.kabupaten.name}</option>
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
                      <option>{sosialDetail?.kecamatan.name}</option>
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
                      <option>{sosialDetail?.desa.name}</option>
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
                      defaultValue={
                        sosialDetail?.registrationForm?.rtrw.split("/")[0]
                      }
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
                      defaultValue={
                        sosialDetail?.registrationForm?.rtrw.split("/")[1]
                      }
                      disabled
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
                      defaultValue={sosialDetail?.registrationForm?.postalCode}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <label
                      htmlFor="deskripsi"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Deskripsi <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deskripsi"
                      defaultValue={sosialDetail?.registrationForm?.deskripsi}
                      disabled
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                {Object.entries(sosialDetail ? sosialDetail.documents : {}).map(
                  (item, index) => {
                    return (
                      <div className="col-12 col-md-6" key={index}>
                        <div className="mb-3 d-flex flex-column">
                          <label
                            htmlFor="kk"
                            className="form-label text-body-3 text-grey-1"
                          >
                            {item[0]} <span className="text-danger">*</span>
                          </label>
                          <a
                            role="button"
                            className="mb-0 text-body-3 text-primary-3"
                            onClick={() => {
                              handleDownloadFile(item[1]);
                            }}
                          >
                            Unduh
                          </a>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
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
                      onClick={() => handleDeleteManySosial({ ids: [id] })}
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
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminSosialDetail;
