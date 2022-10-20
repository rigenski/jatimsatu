import { Icon } from "@iconify/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-white">
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
            <p className="mx-3 me-3 mb-0 text-body-3 text-grey-1 mx-lg-0 me-lg-2">
              Bonyfasius
            </p>
            <a href="#" className="d-none d-lg-block">
              <Icon
                icon="carbon:user-avatar-filled-alt"
                width={32}
                height={32}
                color="#949494"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
