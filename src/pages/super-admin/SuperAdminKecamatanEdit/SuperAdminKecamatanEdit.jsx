import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  getKabupaten,
  getKecamatanById,
  getProvinsi,
  updateKecamatan,
} from "../../../store/region/regionAction";

const SuperAdminKecamatanEdit = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { provinsiAll, kabupatenAll, kecamatanDetail } = useSelector(
    (state) => state.region
  );

  const { register, handleSubmit } = useForm({
    provinsiId: kecamatanDetail?.provinsiId,
    kabupatenId: kecamatanDetail?.kabupatenId,
    name: kecamatanDetail?.name,
  });

  const [loading, setLoading] = useState(false);

  const { id } = params;

  const handleGetAllProvinsi = async () => {
    await dispatch(getProvinsi());
  };

  const handleGetAllKabupaten = async () => {
    await dispatch(getKabupaten());
  };

  const handleGetKecamatanById = async (data) => {
    await dispatch(getKecamatanById(data));
  };

  const handleUpdateKecamatan = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(updateKecamatan(data)).then((res) => {
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
    const data = {
      id: id,
    };

    handleGetKecamatanById(data);
    handleGetAllProvinsi();
    handleGetAllKabupaten();
  }, [id]);

  return (
    <>
      <SuperAdminDashboard>
        <form onSubmit={handleSubmit(handleUpdateKecamatan)}>
          <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-2 text-heading-3 text-grey-1">
                Edit Kecamatan
              </h3>
              <p className="mb-0 text-body-2 text-grey-3">
                edit data kecamatan
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
                      defaultValue={kecamatanDetail?.name}
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
                        if (kecamatanDetail?.provinsiId === item.id) {
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
                        if (kecamatanDetail?.kabupatenId === item.id) {
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
              </div>
            </div>
          </div>
        </form>
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminKecamatanEdit;
