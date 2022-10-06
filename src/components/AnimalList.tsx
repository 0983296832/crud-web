import React from "react";
import { Animal, AnimalList as AML } from "../model/animal";
import SingleAnimal from "./SingleAnimal";

const AnimalList: React.FC<AML | any> = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {data.map((item: Animal) => {
        return <SingleAnimal data={item} key={item.animal_id} />;
      })}
    </div>
  );
};

export default AnimalList;
