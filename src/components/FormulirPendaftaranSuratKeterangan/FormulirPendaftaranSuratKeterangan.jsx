import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const typeDocuments = [
  {
    id: "91a35f21-bf13-45d2-96da-0a76089f8f71",
    name: "Surat Keterangan Domisili",
  },
  {
    id: "969ba0c8-3e65-4d3b-8bf6-dd998c4230cb",
    name: "Surat Keterangan Lahir",
  },
  {
    id: "56ebfd26-63c5-4fea-893c-176473c38968",
    name: "Surat Keterangan Meninggal",
  },
  {
    id: "3e4a7a04-c680-4639-a3ee-a7d6be5bf673",
    name: "Surat Keterangan Pindah/Datang",
  },
  {
    id: "0cd3c8fd-ce1d-4736-97d2-ad243974c417",
    name: "Surat Keterangan Duda/Janda",
  },
  {
    id: "9ea5d289-42d8-4c52-a51a-3153a3aad4ea",
    name: "Surat Keterangan Menikah",
  },
  {
    id: "35b57cc0-56e9-435c-9508-b4102d6ad5f1",
    name: "Surat Keterangan Cerai",
  },
];

const FormulirPendaftaranSuratKeterangan = (props) => {
  const { user } = useSelector((state) => state.auth);

  const [deskripsi, setDeskripsi] = useState("");

  useEffect(() => {
    props.setFormRegister({ deskripsi: deskripsi });
  }, [deskripsi]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label
              htmlFor="jenis-dokumen"
              className="form-label text-body-3 text-grey-1"
            >
              Jenis Dokumen <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="jenis-dokumen"
              onChange={(e) => {
                props.setTypeSelected(e.target.value);
              }}
            >
              {typeDocuments.map((item, index) => {
                if (item.id === props.typeSelected) {
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
              htmlFor="nama"
              className="form-label text-body-3 text-grey-1"
            >
              Nama <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="nama"
              defaultValue={user.name}
              disabled
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="nik" className="form-label text-body-3 text-grey-1">
              NIK <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="nik"
              defaultValue={user.nik}
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
              defaultValue={user.address}
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
              <option>{user.kabupatenId}</option>
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
              <option>{user.kecamatanId}</option>
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
              <option>{user.desaId}</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="rt" className="form-label text-body-3 text-grey-1">
              RT <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="rt"
              defaultValue={user.rtrw}
              disabled
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="rw" className="form-label text-body-3 text-grey-1">
              RW <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="rw"
              defaultValue={user.rtrw}
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
              defaultValue={user.postalCode}
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
              placeholder="Berikan keterangan detail mengenai pengajuan anda"
              onChange={(e) => setDeskripsi(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormulirPendaftaranSuratKeterangan;
