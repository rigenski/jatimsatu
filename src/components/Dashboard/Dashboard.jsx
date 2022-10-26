import React from "react";
import { Icon } from "@iconify/react";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";

const Dashboard = (props) => {
  const location = useLocation();

  const { pathname } = location;
  const navUrl = pathname.split("/")[2];

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 bg-white border-bottom border-grey-5">
        <div className="container-fluid px-4">
          <a className="navbar-brand text-heading-3 text-primary-2" href="#">
            Jatimsatu
          </a>
          <div className="d-flex align-items-center">
            <a href="#" className="me-2 d-block d-lg-none">
              <Icon
                icon="codicon:bell"
                width={24}
                height={24}
                color="#474747"
              />
            </a>
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
              <a href="#" className="d-none d-lg-block">
                <Icon
                  icon="codicon:bell"
                  width={24}
                  height={24}
                  color="#474747"
                />
              </a>
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
                      <a
                        className="dropdown-item py-2 d-flex align-items-center"
                        href="/dokumen"
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
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item py-2 d-flex align-items-center"
                        href="/logout"
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
                      </a>
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
              {navUrl === "home" ? (
                <a
                  href="/super-admin/home"
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
                </a>
              ) : (
                <a
                  href="/super-admin/home"
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
                </a>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "users" ? (
                <a
                  href="/super-admin/users"
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
                </a>
              ) : (
                <a
                  href="/super-admin/users"
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
                </a>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "kependudukan" ? (
                <a
                  href="/super-admin/kependudukan"
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
                </a>
              ) : (
                <a
                  href="/super-admin/kependudukan"
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
                </a>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "sosial" ? (
                <a
                  href="/super-admin/sosial"
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
                </a>
              ) : (
                <a
                  href="/super-admin/sosial"
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
                </a>
              )}
            </li>
            <li className="mb-3">
              {navUrl === "kesehatan" ? (
                <a
                  href="/super-admin/kesehatan"
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
                </a>
              ) : (
                <a
                  href="/super-admin/kesehatan"
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
                </a>
              )}
            </li>
            <li className="mb-3">
              <a href="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="fluent-mdl2:education"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">
                  Pendidikan
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="healthicons:market-stall-outline"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">UMKM</span>
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="p-2 d-flex align-items-center">
                <Icon
                  icon="ant-design:user-outlined"
                  width={24}
                  height={24}
                  color="#949494"
                />
                <span className="ms-2 text-paragraph-1 text-grey-2">
                  Perizinan
                </span>
              </a>
            </li>
            <li className="mb-3">
              <div class="accordion">
                <div class="accordion-item border-0">
                  <h2 class="accordion-header bg-transparent" id="headingOne">
                    <a
                      type="button"
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
                    class="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#wilayahAccordion"
                  >
                    <div class="accordion-body px-0 ps-4">
                      <ul className="px-2">
                        <li className="mb-3">
                          {navUrl === "kecamatan" ? (
                            <a
                              href="/super-admin/kecamatan"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-primary-2 border-4 border-end border-primary-2"
                            >
                              Kecamatan
                            </a>
                          ) : (
                            <a
                              href="/super-admin/kecamatan"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-grey-2"
                            >
                              Kecamatan
                            </a>
                          )}
                        </li>
                        <li className="mb-3">
                          {navUrl === "desa" ? (
                            <a
                              href="/super-admin/desa"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-primary-2 border-4 border-end border-primary-2"
                            >
                              Desa
                            </a>
                          ) : (
                            <a
                              href="/super-admin/desa"
                              className="px-2 py-2 d-flex align-items-center text-paragraph-1 text-grey-2"
                            >
                              Desa
                            </a>
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

export default Dashboard;
