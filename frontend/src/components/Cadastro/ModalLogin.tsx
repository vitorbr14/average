import React from "react";

type modalProps = {
  openModalLogin: boolean;
  handleClickModalLogin: any;
  children: any;
};

const ModalLogin = ({
  openModalLogin,
  handleClickModalLogin,
  children,
}: modalProps) => {
  return (
    <div
      onClick={handleClickModalLogin}
      className={`fixed inset-0 flex justify-center items-center transition-colors  ${
        openModalLogin ? "visible bg-black/70 " : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-11/12 h-auto md:h-auto md:w-3/5  bg-white flex-col shadow p-6 transition-all ${
          openModalLogin ? " scale-100 opacity-100" : "scale-125 opacity-0"
        } flex justify-center items-center py-12 `}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLogin;
