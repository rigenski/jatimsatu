import React from "react";
import { Icon } from "@iconify/react";
import "./SuperAdminDashboard.css";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/auth/authSlice";

const AdminDashboard = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { pathname } = location;
  const navUrl = pathname.split("/")[2];

  const handleLogout = async () => {
    const loader = toast.loading("Waiting...");

    setTimeout(() => {
      dispatch(authLogout());

      toast.dismiss(loader);
      toast.success("Logout successfully!");
    }, 2000);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 bg-white border-bottom border-grey-5">
        <div className="container-fluid px-4">
          <Link to="#" className="navbar-brand text-heading-3 text-primary-2">
            Jatimsatu
          </Link>
          <div className="d-flex align-items-center">
            <Link to="#" className="me-2 d-block d-lg-none">
              <Icon
                icon="codicon:bell"
                width={24}
                height={24}
                color="#474747"
              />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu-drawer"
              aria-controls="menu-drawer"
              aria-expanded="false"
            >
              <Icon
                icon="charm:menu-hamburger"
                width={28}
                height={28}
                color="#474747"
              />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="menu-drawer">
            <div className="ms-auto d-flex align-items-center">
              <Link to="#" className="d-none d-lg-block">
                <Icon
                  icon="codicon:bell"
                  width={24}
                  height={24}
                  color="#474747"
                />
              </Link>
              <div
                className="mx-4 d-none d-lg-block"
                style={{ height: "24px", borderRight: "1px solid #949494 " }}
              ></div>
              <div className="w-100 d-flex justify-content-between align-items-center w-lg-auto">
                <div className="order-2 px-3 py-2 text-primary-2 bg-primary-6 rounded-3 order-lg-1">
                  Super Admin
                </div>
                <div className="dropdown order-1 order-lg-2">
                  <button
                    className="dropdown-toggle d-flex align-items-center bg-transparent border-0 "
                    data-bs-toggle="dropdown"
                  >
                    <p className="me-0 mx-2 mb-0 text-body-3 text-grey-1 me-lg-2">
                      Bonyfasius
                    </p>
                    <Icon
                      icon="carbon:user-avatar-filled-alt"
                      width={32}
                      height={32}
                      color="#949494"
                      className="d-none d-lg-block"
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item py-2 d-flex align-items-center"
                        to="/dokumen"
                      >
                        <Icon
                          icon="ep:document"
                          width={24}
                          height={24}
                          color="#000000"
                        />
                        <span className="ms-2 text-body-4 text-grey-1">
                          Dokumen saya
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        role="button"
                        className="dropdown-item py-2 d-flex align-items-center"
                        onClick={() => handleLogout()}
                      >
                        <Icon
                          icon="charm:sign-out"
                          width={24}
                          height={24}
                          color="#000000"
                        />
                        <span className="ms-2 text-body-4 text-grey-1">
                          Keluar
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="dashboard d-flex">
        <aside className="border-end border-grey-5">
          <ul className="mb-0 ps-4 py-4 d-flex flex-column">
            <li className="mb-3">
              {navUrl === undefined ? (
                <Link
                  to="/super-admin"
                  className="p-2 d-flex align-items-center border-4 border-end border-primary-2"
                >
                  <Icon
                    icon="ic:outline-dashboard"
                    width={24}
                    height={24}
                    color="#4C9B70"
                  />
                  <span className="ms-2 text-paragraph-1 text-primary-2">
                    Dashboard
                  </span>
                </Link>
              ) : (
                <Link
                  to="/super-admin"
                  className="p-2 d-flex align-items-center"
                >
                  <Icon
                    icon="ic:outline-dashboard"
                    width={24}
                    height={24}
                    color="#949494"
                  />
                  <span className="ms-2 text-paragraph-1 text-grey-2">
                    Dashboard
                  </span>
                </Link>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "users" ? (
                <Link
                  to="/super-admin/users"
                  className="p-2 d-flex align-items-center border-4 border-end border-primary-2"
                >
                  <Icon
                    icon="ant-design:user-outlined"
                    width={24}
                    height={24}
                    color="#4C9B70"
                  />
                  <span className="ms-2 text-paragraph-1 text-primary-2">
                    User Management
                  </span>
                </Link>
              ) : (
                <Link
                  to="/super-admin/users"
                  className="p-2 d-flex align-items-center"
                >
                  <Icon
                    icon="ant-design:user-outlined"
                    width={24}
                    height={24}
                    color="#949494"
                  />
                  <span className="ms-2 text-paragraph-1 text-grey-2">
                    User Management
                  </span>
                </Link>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "kependudukan" ? (
                <Link
                  to="/super-admin/kependudukan"
                  className="p-2 d-flex align-items-center border-4 border-end border-primary-2"
                >
                  <Icon
                    icon="clarity:users-line"
                    width={24}
                    height={24}
                    color="#4C9B70"
                  />
                  <span className="ms-2 text-paragraph-1 text-primary-2">
                    Kependudukan
                  </span>
                </Link>
              ) : (
                <Link
                  to="/super-admin/kependudukan"
                  className="p-2 d-flex align-items-center"
                >
                  <Icon
                    icon="clarity:users-line"
                    width={24}
                    height={24}
                    color="#949494"
                  />
                  <span className="ms-2 text-paragraph-1 text-grey-2">
                    Kependudukan
                  </span>
                </Link>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "sosial" ? (
                <Link
                  to="/super-admin/sosial"
                  className="p-2 d-flex align-items-center border-4 border-end border-primary-2"
                >
                  <Icon
                    icon="fluent:handshake-20-regular"
                    width={24}
                    height={24}
                    color="#4C9B70"
                  />
                  <span className="ms-2 text-paragraph-1 text-primary-2">
                    Sosial
                  </span>
                </Link>
              ) : (
                <Link
                  to="/super-admin/sosial"
                  className="p-2 d-flex align-items-center"
                >
                  <Icon
                    icon="fluent:handshake-20-regular"
                    width={24}
                    height={24}
                    color="#949494"
                  />
                  <span className="ms-2 text-paragraph-1 text-grey-2">
                    Sosial
                  </span>
                </Link>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "kesehatan" ? (
                <Link
                  to="/super-admin/kesehatan"
                  className="p-2 d-flex align-items-center border-4 border-end border-primary-2"
                >
                  <Icon
                    icon="healthicons:health-alt-outline"
                    width={24}
                    height={24}
                    color="#4C9B70"
                  />
                  <span className="ms-2 text-paragraph-1 text-primary-2">
                    Kesehatan
                  </span>
                </Link>
              ) : (
                <Link
                  to="/super-admin/kesehatan"
                  className="p-2 d-flex align-items-center"
                >
                  <Icon
                    icon="healthicons:health-alt-outline"
                    width={24}
                    height={24}
                    color="#949494"
                  />
                  <span className="ms-2 text-paragraph-1 text-grey-2">
                    Kesehatan
                  </span>
                </Link>
              )}
            </li>
            <li className="mb-3">
              <Link to="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="fluent-mdl2:education"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">
                  Pendidikan
                </span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="healthicons:market-stall-outline"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">UMKM</span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="ant-design:user-outlined"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">
                  Perizinan
                </span>
              </Link>
            </li>
            <li className="mb-3">
              <div className="accordion">
                <div className="accordion-item border-0">
                  <h2
                    className="accordion-header bg-transparent"
                    id="headingOne"
                  >
                    <a
                      role="button"
                      className="accordion-button p-2 d-flex align-items-center bg-transparent border-0 shadow-none"
                      data-bs-toggle="collapse"
                      data-bs-target="#wilayahAccordion"
                      aria-expanded="true"
                      aria-controls="wilayahAccordion"
                    >
                      <Icon
                        icon="ic:outline-holiday-village"
                        width={24}
                        height={24}
                        color="#949494"
                      />
                      <span className="ms-2 text-paragraph-1 text-grey-2">
                        Wilayah
                      </span>
                    </a>
                  </h2>
                  <div
                    id="wilayahAccordion"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#wilayahAccordion"
                  >
                    <div className="accordion-body px-0 ps-4">
                      <ul className="px-2">
                        <li className="mb-3">
                          {navUrl === "kecamatan" ? (
                            <Link
                              to="/super-admin/kecamatan"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-primary-2 border-4 border-end border-primary-2"
                            >
                              Kecamatan
                            </Link>
                          ) : (
                            <Link
                              to="/super-admin/kecamatan"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-grey-2"
                            >
                              Kecamatan
                            </Link>
                          )}
                        </li>
                        <li className="mb-3">
                          {navUrl === "desa" ? (
                            <Link
                              to="/super-admin/desa"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-primary-2 border-4 border-end border-primary-2"
                            >
                              Desa
                            </Link>
                          ) : (
                            <Link
                              to="/super-admin/desa"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-grey-2"
                            >
                              Desa
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </aside>
        <main style={{ background: "#FCFCFD" }}>
          <div className="p-3 p-lg-4">{props.children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
