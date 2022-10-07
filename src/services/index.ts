import axios from "axios";
import { FormModel } from "../model/form";

export const animalService = {
  getAnimals: () => {
    return axios.get(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals"
    );
  },

  getAnimal: (id: string, cancel: any) => {
    return axios.get(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals/" + id,
      cancel
    );
  },

  addAnimal: (body: any) => {
    return axios.post(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals",
      body
    );
  },

  updateAnimal: (id: string, body: FormModel) => {
    return axios.put(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals" + id,
      body
    );
  },

  deleteAnimal: (id: string) => {
    return axios.delete(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals/" + id
    );
  },
};
