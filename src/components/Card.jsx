import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Card = ({
  email,
  name,
  imageUrl,
  linkedin,
  skills,
  mobile,
  facebook,
}) => {
  console.log(email);
  return (
    <div
      className="card text-center border-0 shadow-lg"
      style={{ width: "20rem" }}
    >
      <div className="card-body">
        <img
          className="d-inline-block  rounded-circle mb-3"
          style={{ width: "95px" }}
          src={imageUrl}
          alt="IAMGE"
        />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{skills}</p>
        <p className="card-text">{email}</p>
        <h6 className="card-text">{mobile}</h6>


        <div className="d-flex justify-content-evenly mt-5">
          <a
            className="icon-link icon-link-hover d-inline-block rounded-circle "
            style={{ transform: "translate3d(0, -.125rem, 0)" }}
            href={linkedin}
          >
            <FaLinkedinIn className="" aria-hidden="true">
              <use xlink:href="#clipboard"></use>
            </FaLinkedinIn>
          </a>
          <a
            className="icon-link icon-link-hover d-inline-block rounded-circle "
            style={{ transform: "translate3d(0, -.125rem, 0)" }}
            href={facebook}
          >
            <FaFacebookF className="bi" aria-hidden="true">
              <use xlink:href="#clipboard"></use>
            </FaFacebookF>
          </a>
          <a
            className="icon-link icon-link-hover d-inline-block rounded-circle "
            style={{ transform: "translate3d(0, -.125rem, 0)" }}
            href={linkedin}
          >
            <FaTelegramPlane className="bi" aria-hidden="true">
              <use xlink:href="#clipboard"></use>
            </FaTelegramPlane>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
