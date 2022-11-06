import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "src/config/firebase/firebase";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { createKependudukanForm } from "../../../store/kependudukan/kependudukanAction";
import FormulirPendaftaran from "../../FormulirPendaftaran/FormulirPendaftaran";

// assets
import DokumentTerkirimIllust from "src/assets/images/pre-dashboard/sosial/dokumen-terkirim-illust.svg";

const DaftarKTP = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { handleSubmit, reset } = useForm({
    defaultValues: {
      name: user.name,
      nik: user.nik,
      alamat: user.address,
      kabupatenId: user.kabupatenId,
      kecamatanId: user.kecamatanId,
      desaId: user.desaId,
      rtrw: user.rtrw,
      postalCode: user.postalCode,
    },
  });

  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("formulir-pendaftaran");
  const [complete, setComplete] = useState(false);

  const [formRegister, setFormRegister] = useState(null);

  const [KK, setKK] = useState(null);
  const [aktaLahir, setAktaLahir] = useState(null);
  const [SKHilang, setSKHilang] = useState(null);

  const handleCreateKependudukanForm = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    let documents = {};

    if (KK) {
      const KKSelected = KK.files[0];
      documents.KK = `${uuid()}-${KKSelected.name}`;

      const storageRef = ref(storage, `documents/${documents.KK}`);

      uploadBytes(storageRef, KKSelected).then(() => {
        KKSelected.value = "";
      });
    }

    if (aktaLahir) {
      const aktaLahirSelected = aktaLahir.files[0];
      documents.aktaLahir = `${uuid()}-${aktaLahirSelected.name}`;

      const storageRef = ref(storage, `documents/${documents.aktaLahir}`);

      uploadBytes(storageRef, aktaLahirSelected).then(() => {
        aktaLahirSelected.value = "";
      });
    }

    if (SKHilang) {
      const SKHilangSelected = SKHilang.files[0];
      documents.SKHilang = `${uuid()}-${SKHilangSelected.name}`;

      const storageRef = ref(storage, `documents/${documents.SKHilang}`);

      uploadBytes(storageRef, SKHilangSelected).then(() => {
        SKHilangSelected.value = "";
      });
    }

    Object.assign(data, formRegister);

    const dataJSON = {
      formTypeId: "9b6d0e7e-0bd7-4504-9483-a4e55ccf60ec",
      registrationForm: data,
      documents: documents,
    };

    await dispatch(createKependudukanForm(dataJSON)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        setLoading(false);
        setComplete(true);
        reset();
      } else {
        toast.error(res.payload.response.data.message);

        setLoading(false);
      }
    });
  };

  return (
    <>
      <form
        className="form mb-4 px-3 py-4 bg-white rounded-2 px-md-4"
        onSubmit={handleSubmit(handleCreateKependudukanForm)}
      >
        <div className="mb-4 d-flex justify-content-between">
          <div>
            <h5 className="mb-1 text-heading-5 text-grey-1">
              Pengajuan Daftar KTP
            </h5>
            <p className="mb-0 text-paragraph-2 text-grey-3">
              Isi formulir dan unggah dokumen-dokumen yang dibutuhkan untuk
              mendapat surat keterangan
            </p>
          </div>
          {!complete ? (
            <div className="d-none align-items-center d-lg-flex">
              <Link
                to="/home"
                className="btn me-3 text-button text-grey-1 bg-white text-center border-1 border-grey-1 rounded-1"
              >
                Batalkan
              </Link>
              <button
                type="submit"
                className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
                disabled={loading}
              >
                Kirim
              </button>
            </div>
          ) : null}
        </div>
        {!complete ? (
          <>
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
                  disabled={formRegister?.deskripsi ? false : true}
                >
                  Upload Dokumen
                </button>
              </div>
            </div>
            {section === "formulir-pendaftaran" ? (
              <FormulirPendaftaran
                formRegister={formRegister}
                setFormRegister={(value) => setFormRegister(value)}
              />
            ) : (
              <div className="row">
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
                      onChange={(e) => setKK(e.target)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="akta-lahir"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Upload Akta Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="akta-lahir"
                      onChange={(e) => setAktaLahir(e.target)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="surat-hilang"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Surat keterangan hilang (jika hilang)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="surat-hilang"
                      onChange={(e) => setSKHilang(e.target)}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 d-flex justify-content-center align-items-center d-lg-none justify-content-md-end">
              <Link
                to="/home"
                className="btn me-3 text-button text-grey-1 bg-white text-center border-1 border-grey-1 rounded-1"
              >
                Batalkan
              </Link>
              <button
                type="submit"
                className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
                disabled={loading}
              >
                Kirim
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 border-bottom border-grey-4"></div>
            <div className="dokumen-terkirim d-flex flex-column justify-content-center align-items-center">
              <img src={DokumentTerkirimIllust} alt="" className="mb-4" />
              <h5 className="mb-2 text-heading-5 text-black text-center">
                Dokumen telah terkirim
              </h5>
              <p className="mb-4 text-paragraph-2 text-black text-center">
                Dokumen akan selesai setelah mendapat persetujuan dari admin.
                Anda akan mendapatkan informasi jika dokumen telah selesai
                melalui notifkasi
              </p>
              <Link
                to="/home"
                className="btn text-button text-white bg-primary-2 text-center border-0 rounded-1"
              >
                Kembali ke dashboard
              </Link>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default DaftarKTP;
