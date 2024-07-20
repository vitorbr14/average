"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (data) => {
    const formated = data.split("T")[0];
    const dataFormated = formated.split("-");
    return `${dataFormated[2]}/${dataFormated[1]}/${dataFormated[0]}`;
};
exports.formatDate = formatDate;
