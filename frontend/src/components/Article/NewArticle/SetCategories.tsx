import React, { useEffect, useState } from "react";
import { topics } from "../../../data/data";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Inputs } from "./ArticleEditor";
import { Controller } from "react-hook-form";
import Select from "react-select";
type CategoriesType = {
  id: number;
  name: string;
};

type SetCategoriesProps = {
  register: any;
  control: any;
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SetCategories = ({ register, control }: SetCategoriesProps) => {
  const { setValue } = useForm();
  const { getValues } = useForm<Inputs>();
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState<any>();
  const [isClearable, setIsClearable] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5656/api/v1/category")
      .then(function (response) {
        setAllCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="md:w-3/5 text-center">
      <h1 className="text-xl font-bold">
        Escolha as categorias do seu artigo.
      </h1>
      <h3 className="text-lg text-gray-400">
        Por favor, selecione uma categoria para seu artigo.
      </h3>

      <div>
        <div className="flex flex-wrap justify-center">
          <Controller
            control={control}
            name="Select"
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={allCategories}
                placeholder="Categorias"
                isClearable={isClearable}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SetCategories;
