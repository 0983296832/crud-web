import { Select } from "antd";
import React from "react";
import i18n from "../i18n.js";

const { Option } = Select;

const ChangeLng: React.FC = () => {
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <Select defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
      <Option value="en">EngLish</Option>
      <Option value="vn">Tiếng Việt</Option>
    </Select>
  );
};

export default ChangeLng;
