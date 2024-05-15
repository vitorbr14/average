export const formatDate = (data: string) => {
  const formated = data.split("T")[0];
  const dataFormated = formated.split("-");

  return `${dataFormated[2]}/${dataFormated[1]}/${dataFormated[0]}`;
};
