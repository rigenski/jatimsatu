import React from "react";
import Navbar from "src/components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import "./LayananDetail.css";

const LayananDetail = (props) => {
  return (
    <>
      <Navbar />
      <main className="layanan-detail">
        <div className="jumbotron pt-2 px-0 position-relative bg-primary-2 px-lg-5 pt-lg-4">
          <div className="container py-3 position-relative px-3">
            <div className="mb-4 pb-2">
              <a href="/" className="mb-4 d-flex align-items-center">
                <Icon
                  icon="akar-icons:chevron-left"
                  width={16}
                  height={16}
                  color="#FFFFFF"
                />
                <h6 className="mb-0 text-heading-7 text-white ms-2">Kembali</h6>
              </a>
            </div>
            {props.children}
          </div>
        </div>
      </main>
    </>
  );
};

export default LayananDetail;
