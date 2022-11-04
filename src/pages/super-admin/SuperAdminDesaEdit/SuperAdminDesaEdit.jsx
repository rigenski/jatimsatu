import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuperAdminDashboard from "src/components/SuperAdminDashboard/SuperAdminDashboard";
import {
  createDesa,
  getDesaById,
  getKabupaten,
  getKecamatan,
  getProvinsi,
  updateDesa,
} from "../../../store/region/regionAction";

const SuperAdminDesaEdit = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { provinsiAll, kabupatenAll, kecamatanAll, desaDetail } = useSelector(
    (state) => state.region
  );

  const { register, handleSubmit } = useForm({
    provinsiId: desaDetail?.provinsiId,
    kabupatenId: desaDetail?.kabupatenId,
    kecamatanId: desaDetail?.kecamatanId,
    name: desaDetail?.name,
  });

  const [loading, setLoading] = useState(false);

  const { id } = params;

  const handleGetAllProvinsi = async () => {
    await dispatch(getProvinsi());
  };

  const handleGetAllKabupaten = async () => {
    await dispatch(getKabupaten());
  };

  const handleGetAllKecamatan = async () => {
    const data = {
      searchKey: null,
      searchValue: null,
    };

    await dispatch(getKecamatan(data));
  };

  const handleGetDesaById = async (data) => {
    await dispatch(getDesaById(data));
  };

  const handleUpdateDesa = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(updateDesa(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        toast.success(res.payload.message);

        setLoading(false);

        navigate("/super-admin/desa");
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

    handleGetDesaById(data);
    handleGetAllProvinsi();
    handleGetAllKabupaten();
    handleGetAllKecamatan();
  }, [id]);

  return (
    <>
      <SuperAdminDashboard>
        <form onSubmit={handleSubmit(handleUpdateDesa)}>
          <div className="mb-2 pb-4 d-flex flex-column justify-content-between align-items-start flex-lg-row align-items-lg-center">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-2 text-heading-3 text-grey-1">Edit Desa</h3>
              <p className="mb-0 text-body-2 text-grey-3">Edit data desa</p>
            </div>
            <div className="d-flex">
              <Link
                to="/super-admin/desa"
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
                      htmlFor="desa"
                      className="form-label text-body-3 text-grey-1"
                    >
                      Desa <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desa"
                      defaultValue={desaDetail?.name}
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
                        if (desaDetail?.provinsiId === item.id) {
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
                        if (desaDetail?.kabupatenId === item.id) {
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
                  <div className="col-12">
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
                      >
                        <option value="">---pilih salah satu---</option>
                        {kecamatanAll.map((item, index) => {
                          if (desaDetail?.kecamatanId === item.id) {
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
          </div>
        </form>
      </SuperAdminDashboard>
    </>
  );
};

export default SuperAdminDesaEdit;
