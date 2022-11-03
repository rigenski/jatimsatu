import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const typeDocuments = [
  {
    id: "1f3a348d-af77-424a-a2a2-636b47382599",
    name: "Perubahan Status Pendidikan",
  },
  {
    id: "88bff511-5786-4a34-ad46-b7dbed19fd96",
    name: "Perubahan Status Pekerjaan",
  },
  {
    id: "1234",
    name: "Perubahan Status Kependudukan",
  },
];

const FormulirPendaftaranPerubahanStatus = (props) => {
  const { user } = useSelector((state) => state.auth);

  const [deskripsi, setDeskripsi] = useState("");

  useEffect(() => {
    props.setFormRegister({ deskripsi: deskripsi });
  }, [deskripsi]);

  useEffect(() => {
    setDeskripsi(props.formRegister?.deskripsi);
  }, []);

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
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormulirPendaftaranPerubahanStatus;
