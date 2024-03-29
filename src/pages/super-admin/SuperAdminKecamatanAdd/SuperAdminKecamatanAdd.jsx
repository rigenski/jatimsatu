import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  createKecamatan,
  getKabupaten,
  getProvinsi,
} from "../../../store/region/regionAction";

const SuperAdminKecamatanAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { provinsiAll, kabupatenAll } = useSelector((state) => state.region);

  const [loading, setLoading] = useState(false);

  const handleGetAllProvinsi = async () => {
    await dispatch(getProvinsi());
  };

  const handleGetAllKabupaten = async () => {
    await dispatch(getKabupaten());
  };

  const handleAddKecamatan = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(createKecamatan(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        setLoading(false);

        navigate("/super-admin/kecamatan");
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

  return (
    <>
      <SuperAdminDashboard>
        <form onSubmit={handleSubmit(handleAddKecamatan)}>
          <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-2 text-heading-3 text-grey-1">
                Tambah Kecamatan
              </h3>
              <p className="mb-0 text-body-2 text-grey-3">
                Tambah data kecamatan
              </p>
            </div>
            <div className="d-flex">
              <Link
                to="/super-admin/kecamatan"
                className="btn me-3 w-auto px-2 text-button bg-white  text-center border-1 border-grey-1 rounded-1"
              >
                Batal
              </Link>
              <button
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
                  <div className="mb-3">
                    <label
                      htmlFor="kecamatan"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Kecamatan <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kecamatan"
                      placeholder="Bakung"
                      required
                      {...register("name")}
                    />
                  </div>
                </div>
                <div className="col-12">
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
                <div className="col-12">
                  <div className="mb-3">
                    <label
                      htmlFor="kabupaten"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Kabupaten/kota <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="kabupaten"
                      required
                      {...register("kabupatenId")}
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
              </div>
            </div>
          </div>
        </form>
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminKecamatanAdd;
