import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

const SelectId:React.FC<any> = ({setSortBy, sortBy}) => {

  const handleChange = (value: string) => {
    setSortBy(value)
  };
  return (
    <Select defaultValue={sortBy} style={{ width: 120 }} onChange={handleChange}>
      <Option value="id">Id tăng dần</Option>
      <Option value="-id">Id giảm dần</Option>
     
  </Select>
  )
}

export default SelectId