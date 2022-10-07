import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagin: React.FC<Props> = ({ page, setPage }) => {
  const animal = useSelector((state: any) => state.animal);

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  return (
    <Pagination
      defaultCurrent={page}
      total={animal.total}
      onChange={onChange}
    />
  );
};

export default Pagin;
