import React, { useEffect, useState } from "react";
import AnimalList from "../components/AnimalList";
import Filter from "../components/filter/Filter";
import SelectId from "../components/filter/Select";
import Pagin from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllAnimal, searchByName } from "../store/petSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Animal } from "../model/animal";
import Login from "../components/Login";

const Home = () => {
  const animal = useSelector((state: any) => state.animal);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("id");

  useEffect(() => {
    dispatch(getAllAnimal());
  }, []);

  const handleShowResult = () => {
    if (animal.loading) return <Loading />;
    if (animal.error) return <Error />;
    return (
      <AnimalList data={animal.animals.slice((page - 1) * 10, page * 10)} />
    );
  };

  return (
    <div className="wrapper">
      <h1 className="text-center mt-10">Animail List</h1>
      <div className="flex items-center justify-center gap-10 mt-10">
        <Filter sortBy={sortBy} />
        <SelectId setSortBy={setSortBy} sortBy={sortBy} />
      </div>
      <div className="flex items-center justify-center mt-10">
        {handleShowResult()}
      </div>
      <div className="flex items-center justify-center gap-10 my-10">
        <Pagin page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
