import React, { useEffect, useState } from "react";
import { Animal } from "../model/animal";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { animalService } from "../services";
import axios from "axios";

const Detail: React.FC = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const getAnimal = async (id: string | any): Promise<void> => {
      setLoading(true);
      try {
        const response = await animalService.getAnimal(id, {
          cancelToken: cancelToken.token,
        });

        setAnimal(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        }
      }
      setLoading(false);
    };

    getAnimal(id);
    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-[100px]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-around wrapper mt-[120px]">
      <div>
        <img src={animal.animal_avatar} alt="" className="w-400 object-cover" />
      </div>
      <div className="w-[600px]">
        <h1 className="text-5xl mt-5">{animal.animal_name}</h1>
        <p className="mt-5">{animal.animal_desc}</p>
        <h3 className="text-2xl mt-5">{animal.animal_price}$</h3>
      </div>
    </div>
  );
};

export default Detail;
