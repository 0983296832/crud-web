import React, { useEffect, useState } from "react";
import AnimalList from "../components/AnimalList";
import Filter from "../components/filter/Filter";
import SelectId from "../components/filter/Select";
import Pagin from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllAnimal } from "../store/petSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Form from "../components/Form";
import { FormModel } from "../model/form";
import { RootState, AppDispatch } from "../store";
import { useTranslation } from "react-i18next";
import i18next from "../i18n.js";

const Home = () => {
  const animal = useSelector((state: RootState) => state.animal);
  const { name } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("-id");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<FormModel>({
    animal_id: "",
    animal_name: "",
    animal_desc: "",
    animal_short: "",
  });
  const { t } = useTranslation();

  console.log(t, i18next);

  useEffect(() => {
    dispatch(getAllAnimal("-id"));
  }, []);

  const handleShowResult = () => {
    if (animal.loading) return <Loading />;
    if (animal.error) return <Error />;
    return (
      <AnimalList
        data={animal.animals.slice((page - 1) * 10, page * 10)}
        setIsFormOpen={setIsFormOpen}
        setFormValue={setFormValue}
      />
    );
  };

  return (
    <div className="wrapper">
      <h1 className="text-center mt-10">{t("list")}</h1>
      {name && (
        <div className="flex justify-end">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => {
              setIsFormOpen(true);
              setFormValue({
                animal_id: "",
                animal_name: "",
                animal_desc: "",
                animal_short: "",
              });
            }}
          />
        </div>
      )}
      <div className="flex items-center justify-center gap-10 mt-10">
        <Filter sortBy={sortBy} />
        <SelectId setSortBy={setSortBy} sortBy={sortBy} />
      </div>
      <div className="flex items-center justify-center mt-10">
        {handleShowResult()}
      </div>
      <div className="flex items-center justify-center gap-10 my-10">
        {animal.loading ? null : <Pagin page={page} setPage={setPage} />}
      </div>
      <Form
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        type="add"
        data={formValue}
      />
    </div>
  );
};

export default Home;
