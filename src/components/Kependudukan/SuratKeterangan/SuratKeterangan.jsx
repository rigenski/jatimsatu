import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "src/config/firebase/firebase";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { createKependudukanForm } from "../../../store/kependudukan/kependudukanAction";
import FormulirPendaftaranBanyak from "../../FormulirPendaftaranBanyak/FormulirPendaftaranBanyak";

// assets
import DokumentTerkirimIllust from "src/assets/images/pre-dashboard/sosial/dokumen-terkirim-illust.svg";

const SuratKeterangan = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [typeSelected, setTypeSelected] = useState(
    "91a35f21-bf13-45d2-96da-0a76089f8f71"
  );

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
  const [KTP, setKTP] = useState(null);
  const [suratRekomendasiRTRW, setSuratRekomendasiRTRW] = useState(null);
  const [KKOrtu, setKKOrtu] = useState(null);
  const [SKKelahiranBayi, setSKKelahiranBayi] = useState(null);
  const [bukuNikah, setBukuNikah] = useState(null);
  const [ijazahOrtu, setIjazahOrtu] = useState(null);
  const [SKKematianRS, setSKKematianRS] = useState(null);
  const [SKRT, setSKRT] = useState(null);
  const [SKKematianPasangan, setSKKematianPasangan] = useState(null);
  const [SKCeraiPengadilan, setSKCeraiPengadilan] = useState(null);

  const handleCreateKependudukanForm = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    let documents = {};

    if (KK) {
      const KKSelected = KK.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${KKSelected.name}`
      );

      uploadBytes(storageRef, KKSelected).then(() => {
        KKSelected.value = "";
      });

      documents.KK = `${uuid()}-${KKSelected.name}`;
    }

    if (KK) {
      const KKSelected = KK.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${KKSelected.name}`
      );

      uploadBytes(storageRef, KKSelected).then(() => {
        KKSelected.value = "";
      });

      documents.KK = `${uuid()}-${KKSelected.name}`;
    }

    if (KTP) {
      const KTPSelected = KTP.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${KTPSelected.name}`
      );

      uploadBytes(storageRef, KTPSelected).then(() => {
        KTPSelected.value = "";
      });

      documents.KTP = `${uuid()}-${KTPSelected.name}`;
    }

    if (suratRekomendasiRTRW) {
      const suratRekomendasiRTRWSelected = suratRekomendasiRTRW.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${suratRekomendasiRTRWSelected.name}`
      );

      uploadBytes(storageRef, suratRekomendasiRTRWSelected).then(() => {
        suratRekomendasiRTRWSelected.value = "";
      });

      documents.suratRekomendasiRTRW = `${uuid()}-${
        suratRekomendasiRTRWSelected.name
      }`;
    }

    if (KKOrtu) {
      const KKOrtuSelected = KKOrtu.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${KKOrtuSelected.name}`
      );

      uploadBytes(storageRef, KKOrtuSelected).then(() => {
        KKOrtuSelected.value = "";
      });

      documents.KKOrtu = `${uuid()}-${KKOrtuSelected.name}`;
    }

    if (SKKelahiranBayi) {
      const SKKelahiranBayiSelected = SKKelahiranBayi.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${SKKelahiranBayiSelected.name}`
      );

      uploadBytes(storageRef, SKKelahiranBayiSelected).then(() => {
        SKKelahiranBayiSelected.value = "";
      });

      documents.SKKelahiranBayi = `${uuid()}-${SKKelahiranBayiSelected.name}`;
    }

    if (bukuNikah) {
      const bukuNikahSelected = bukuNikah.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${bukuNikahSelected.name}`
      );

      uploadBytes(storageRef, bukuNikahSelected).then(() => {
        bukuNikahSelected.value = "";
      });

      documents.bukuNikah = `${uuid()}-${bukuNikahSelected.name}`;
    }

    if (ijazahOrtu) {
      const ijazahOrtuSelected = ijazahOrtu.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${ijazahOrtuSelected.name}`
      );

      uploadBytes(storageRef, ijazahOrtuSelected).then(() => {
        ijazahOrtuSelected.value = "";
      });

      documents.ijazahOrtu = `${uuid()}-${ijazahOrtuSelected.name}`;
    }

    if (SKKematianRS) {
      const SKKematianRSSelected = SKKematianRS.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${SKKematianRSSelected.name}`
      );

      uploadBytes(storageRef, SKKematianRSSelected).then(() => {
        SKKematianRSSelected.value = "";
      });

      documents.SKKematianRS = `${uuid()}-${SKKematianRSSelected.name}`;
    }

    if (SKRT) {
      const SKRTSelected = SKRT.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${SKRTSelected.name}`
      );

      uploadBytes(storageRef, SKRTSelected).then(() => {
        SKRTSelected.value = "";
      });

      documents.SKRT = `${uuid()}-${SKRTSelected.name}`;
    }

    if (SKKematianPasangan) {
      const SKKematianPasanganSelected = SKKematianPasangan.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${SKKematianPasanganSelected.name}`
      );

      uploadBytes(storageRef, SKKematianPasanganSelected).then(() => {
        SKKematianPasanganSelected.value = "";
      });

      documents.SKKematianPasangan = `${uuid()}-${
        SKKematianPasanganSelected.name
      }`;
    }

    if (SKCeraiPengadilan) {
      const SKCeraiPengadilanSelected = SKCeraiPengadilan.files[0];

      const storageRef = ref(
        storage,
        `documents/kependudukan/daftar-ktp/${SKCeraiPengadilanSelected.name}`
      );

      uploadBytes(storageRef, SKCeraiPengadilanSelected).then(() => {
        SKCeraiPengadilanSelected.value = "";
      });

      documents.SKCeraiPengadilan = `${uuid()}-${
        SKCeraiPengadilanSelected.name
      }`;
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
              Pengajuan Perubahan Status
            </h5>
            <p className="mb-0 text-paragraph-2 text-grey-3">
              Isi formulir dan unggah dokumen-dokumen yang dibutuhkan untuk
              mendapat surat keterangan
            </p>
          </div>
          {!complete ? (
            <div className="d-none align-items-center d-lg-flex">
              <Link
                to="/"
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
                >
                  Upload Dokumen
                </button>
              </div>
            </div>
            {section === "formulir-pendaftaran" ? (
              <FormulirPendaftaranBanyak
                typeSelected={typeSelected}
                setTypeSelected={(value) => setTypeSelected(value)}
                setFormRegister={(value) => setFormRegister(value)}
              />
            ) : typeSelected === "91a35f21-bf13-45d2-96da-0a76089f8f71" ? (
              <>
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
                        required
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
                        required
                        onChange={(e) => setKTP(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="rekomendasi-rt-rw"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Surat Rekomendasi RT/RW{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="rekomendasi-rt-rw"
                        required
                        onChange={(e) => setSuratRekomendasiRTRW(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "969ba0c8-3e65-4d3b-8bf6-dd998c4230cb" ? (
              <>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="kk-ortu"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Upload KK Ortu <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="kk-ortu"
                        required
                        onChange={(e) => setKKOrtu(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="ktp-ortu"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Upload KTP Ortu <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="ktp-ortu"
                        required
                        onChange={(e) => setKTPOrtu(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="sk-kelahiran-bayi"
                        className="form-label text-body-3 text-grey-1"
                      >
                        SK Kelahiran Bayi <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="sk-kelahiran-bayi"
                        required
                        onChange={(e) => setSKKelahiranBayi(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="buku-nikah"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Buku Nikah <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="buku-nikah"
                        required
                        onChange={(e) => setBukuNikah(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="ijazah-ortu"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Ijazah Ortu <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="ijazah-ortu"
                        required
                        onChange={(e) => setIjazahOrtu(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "56ebfd26-63c5-4fea-893c-176473c38968" ? (
              <>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="kk"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Upload KK<span className="text-danger">*</span>
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
                        htmlFor="ktp"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Upload KTP <span className="text-danger">*</span>
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
                        htmlFor="sk-kematian-rs"
                        className="form-label text-body-3 text-grey-1"
                      >
                        SK Kematian dari RS/Bidan{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="sk-kematian-rs"
                        required
                        onChange={(e) => setSKKematianRS(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="sk-rt"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Surat Keterangan dari RT{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="sk-rt"
                        required
                        onChange={(e) => setSKRT(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "3e4a7a04-c680-4639-a3ee-a7d6be5bf673" ? (
              <>
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
                        required
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
                        required
                        onChange={(e) => setKTP(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="rekomendasi-rt-rw"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Surat Rekomendasi RT/RW{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="rekomendasi-rt-rw"
                        required
                        onChange={(e) => setRekomendasiRTRW(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "0cd3c8fd-ce1d-4736-97d2-ad243974c417" ? (
              <>
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
                        required
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
                        required
                        onChange={(e) => setKTP(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="rekomendasi-rt-rw"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Surat Rekomendasi RT/RW{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="rekomendasi-rt-rw"
                        required
                        onChange={(e) => setSuratRekomendasiRTRW(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="sk-kematian-pasangan"
                        className="form-label text-body-3 text-grey-1"
                      >
                        SK Kematian Pasangan{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="sk-kematian-pasangan"
                        required
                        onChange={(e) => setSKKematianPasangan(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "9ea5d289-42d8-4c52-a51a-3153a3aad4ea" ? (
              <>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="kk-keluarga-asal"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Upload KK Keluarga Asal{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="kk-keluarga-asal"
                        required
                        onChange={(e) => setKKKeluargaAsal(e.target)}
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
                        required
                        onChange={(e) => setKTP(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : typeSelected === "35b57cc0-56e9-435c-9508-b4102d6ad5f1" ? (
              <>
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
                        required
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
                        required
                        onChange={(e) => setKTP(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="rekomendasi-rt-rw"
                        className="form-label text-body-3 text-grey-1"
                      >
                        Surat Rekomendasi RT/RW{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="rekomendasi-rt-rw"
                        required
                        onChange={(e) => setRekomendasiRTRW(e.target)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="sk-cerai"
                        className="form-label text-body-3 text-grey-1"
                      >
                        SK Cerai dari Pengadilan{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="sk-cerai"
                        required
                        onChange={(e) => setSKCeraiPengadilan(e.target)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            <div className="mt-4 d-flex justify-content-center align-items-center d-lg-none justify-content-md-end">
              <Link
                to="/"
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
                to="/"
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

export default SuratKeterangan;
