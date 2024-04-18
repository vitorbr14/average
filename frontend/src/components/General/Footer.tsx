import React from "react";
import { footer } from "../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-wrap  md:w-3/4 my-4">
      {footer.map((footeritem) => {
        return (
          <Link
            to="/"
            className=" ml-1 py-1 px-1  text-sm text-gray-400 hover:text-purple-900 "
          >
            {footeritem}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
