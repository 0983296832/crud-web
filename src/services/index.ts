import axios, { AxiosResponse } from "axios";
import { FormModel } from "../model/form";

export const animalService = {
  getAnimals: (): Promise<AxiosResponse<any, any>> => {
    return axios.get(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals"
    );
  },

  getAnimal: (id: string, cancel: any): Promise<AxiosResponse<any, any>> => {
    return axios.get(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals/" + id,
      cancel
    );
  },

  addAnimal: (body: any): Promise<AxiosResponse<any, any>> => {
    return axios.post(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals",
      body
    );
  },

  updateAnimal: (
    id: string,
    body: FormModel
  ): Promise<AxiosResponse<any, any>> => {
    return axios.put(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals" + id,
      body
    );
  },

  deleteAnimal: (id: string): Promise<AxiosResponse<any, any>> => {
    return axios.delete(
      "https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals/" + id
    );
  },
};
