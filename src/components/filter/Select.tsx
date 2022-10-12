import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const SelectId: React.FC<any> = ({ setSortBy, sortBy }) => {
  const { t } = useTranslation();
  const handleChange = (value: string) => {
    setSortBy(value);
  };
  return (
    <Select
      defaultValue={sortBy}
      style={{ width: 135 }}
      onChange={handleChange}
    >
      <Option value="-id">{t("id_asc")}</Option>
      <Option value="id">{t("id_dsc")}</Option>
    </Select>
  );
};

export default SelectId;
