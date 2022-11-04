import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { login, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (login === true) {
      if (user.role === "SUPER_ADMIN") {
        if (location.pathname.split("/")[1] !== "super-admin") {
          navigate("/super-admin");
        }
      } else if (user.role === "ADMIN") {
        if (location.pathname.split("/")[1] !== "admin") {
          navigate("/admin");
        }
      } else if (user.role === "PENDUDUK") {
        if (location.pathname.split("/")[1] !== "home") {
          navigate("/home");
        }
      } else {
        navigate("/home");
      }
    } else if (login === false) {
      navigate("/signin");
    }
  }, [login]);

  if (login === true && props.role === user.role) {
    return <Outlet />;
  } else if (login === null) {
    return <></>;
  }
};

export default ProtectedRoute;
