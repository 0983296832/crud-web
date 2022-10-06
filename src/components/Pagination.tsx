import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";

const Pagin: React.FC<React.SetStateAction<number> | any> = ({
  page,
  setPage,
}) => {
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
