import React from "react";
import { Input } from "antd";
import { getAllAnimal, searchByName } from "../../store/petSlice";
import { useDispatch } from "react-redux";

const { Search } = Input;

const Filter: React.FC<string | any> = ({ sortBy }) => {
  const dispatch = useDispatch<any>();
  const onSearch = (searchKey: string) => {
    if (searchKey === "") {
      dispatch(getAllAnimal(sortBy));
      dispatch(searchByName({ searchKey: "", sortBy }));
    } else dispatch(searchByName({ searchKey, sortBy }));
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 300 }}
        onSearch={onSearch}
      />
    </div>
  );
};

export default Filter;
