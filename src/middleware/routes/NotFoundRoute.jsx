import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const NotFoundRoute = () => {
  const navigate = useNavigate();
  const { login, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (login === true) {
      if (user.role === "SUPER_ADMIN") {
        navigate("/super-admin");
      } else if (user.role === "ADMIN") {
        navigate("/admin");
      } else if (user.role === "PENDUDUK") {
        navigate("/home");
      }
    } else if (login === false) {
      navigate("/signin");
    }
  }, [login]);

  return <Outlet />;
};

export default NotFoundRoute;
