import { Icon } from "@iconify/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2 bg-white">
      <div className="container px-3">
        <a className="navbar-brand text-heading-3 text-primary-2" href="#">
          Jatimsatu
        </a>
        <div className="d-flex align-items-center">
          <a href="#" className="me-2 d-block d-lg-none">
            <Icon icon="codicon:bell" width={24} height={24} color="#474747" />
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link text-body-4" href="#">
                Kependudukan
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-body-4" href="#">
                Sosial
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-body-4" href="#">
                Kesehatan
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-body-4" href="#">
                Pariwisata
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
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
            <div className="dropdown">
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
                  <a className="dropdown-item py-2" href="/dokumen">
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
                  <a className="dropdown-item py-2" href="/logout">
                    <Icon
                      icon="charm:sign-out"
                      width={24}
                      height={24}
                      color="#000000"
                    />
                    <span className="ms-2 text-body-4 text-grey-1">Keluar</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
