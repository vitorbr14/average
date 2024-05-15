import React from "react";

type modalProps = {
  open: boolean;
  handleClickModal: any;
  children: any;
};

const ConfirmArticleModal = ({
  open,
  handleClickModal,
  children,
}: modalProps) => {
  return (
    <div
      onClick={handleClickModal}
      className={`fixed inset-0 flex justify-center items-center transition-colors  ${
        open ? "visible bg-black/70 " : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-11/12 h-auto md:h-auto md:w-3/5  bg-white flex-col shadow p-6 transition-all ${
          open ? " scale-100 opacity-100" : "scale-125 opacity-0"
        } flex justify-center items-center py-12 `}
      >
        {children}
        <button
          className="bg-red-700 text-white p-2 rounded-xl"
          onClick={handleClickModal}
        >
          Cancelar
        </button>
        <button
          className="bg-red-700 text-white p-2 rounded-xl"
          onClick={handleClickModal}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ConfirmArticleModal;
