import React from "react";
import { Animal } from "../model/animal";
import { FormModel } from "../model/form";
import SingleAnimal from "./SingleAnimal";

interface Props {
  data: [Animal];
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormValue: React.Dispatch<React.SetStateAction<FormModel>>;
}

const AnimalList: React.FC<Props> = ({ data, setIsFormOpen, setFormValue }) => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {data.map((item: Animal) => {
        return (
          <SingleAnimal
            data={item}
            key={item.animal_id}
            setIsFormOpen={setIsFormOpen}
            setFormValue={setFormValue}
          />
        );
      })}
    </div>
  );
};

export default AnimalList;
