import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authLogin, confirmUser } from "../../../store/auth/authAction";

// style
import "./Signin.css";

const Signin = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const handleAuthLogin = async (data) => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    await dispatch(authLogin(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        setLoading(false);

        toast.success(res.payload.message);

        reset({ password: "" });
      } else {
        setLoading(false);

        toast.error(res.payload.response.data.message);
      }
    });
  };

  const handleConfirmUser = async () => {
    setLoading(true);

    const loader = toast.loading("Mohon Tunggu...");

    const data = {
      token: params.token,
    };

    await dispatch(confirmUser(data)).then((res) => {
      toast.dismiss(loader);

      if (res.meta.requestStatus === "fulfilled") {
        setLoading(false);

        toast.success(res.payload.message);
      } else {
        setLoading(false);

        toast.error(res.payload.response.data.message);
      }
    });
  };

  useEffect(() => {
    if (params.token) {
      handleConfirmUser();
    }
  }, []);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, dispatch]);

  return (
    <>
      <main>
        <section className="auth bg-primary-2">
          <div className="container h-100">
            <div className="auth-wrapper h-100 py-5 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-4 text-heading-1 text-white">Jatimsatu</h1>
              <div className="card">
                <div className="card-body px-3 py-5 p-md-5">
                  <form onSubmit={handleSubmit(handleAuthLogin)}>
                    <div className="mb-4">
                      <h3 className="mb-3 text-heading-3 text-grey-1 text-center">
                        Masuk
                      </h3>
                      <p className="text-body-2 text-grey-3 text-center">
                        Masukkan email dan password yang sudah terdaftar.
                        <br /> Belum punya akun?{" "}
                        <Link
                          to="/signup"
                          className="text-primary-2 fw-semibold"
                        >
                          Daftar sekarang!
                        </Link>
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="mb-3">
                        <label
                          htmlFor="phone"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Nomor HP
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Masukkan nomor hp anda disini..."
                          required
                          {...register("phoneNumber", { required: true })}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="password"
                          className="form-label text-body-3 text-grey-1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Masukkan password anda disini..."
                          required
                          {...register("password", { required: true })}
                        />
                      </div>
                      <p className="text-body-4 text-grey-3 mb-0">
                        Lupa kata sandi?{" "}
                        <Link
                          to="/reset-password"
                          className="text-primary-2 fw-semibold"
                        >
                          Klik disini
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        type="submit"
                        className="btn btn-lg w-100 text-button text-white bg-primary-2 text-center border-0 rounded-1"
                        disabled={loading}
                      >
                        Masuk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signin;
