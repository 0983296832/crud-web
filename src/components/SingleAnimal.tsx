import React from "react";
import { Animal } from "../model/animal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { animalService } from "../services";
import { deleteAnimal } from "../store/petSlice";
import FormCP from "./Form";
import { FormModel } from "../model/form";
import { RootState } from "../store";

interface Props {
  data: Animal;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormValue: React.Dispatch<React.SetStateAction<FormModel>>;
}

const SingleAnimal: React.FC<Props> = ({
  data,
  setIsFormOpen,
  setFormValue,
}) => {
  const { name } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const confirm = async () => {
    try {
      await animalService.deleteAnimal(data.animal_id);
      dispatch(deleteAnimal(data.animal_id));
      message.success("Xóa animal thành công");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const cancel = () => {
    message.error("Đã hủy xóa animal");
  };

  const shortDescription = (des: string) => {
    if (des.length > 101) {
      return des.slice(0, 100) + "...";
    } else return des;
  };

  const handleEdit = () => {
    setIsFormOpen(true);
    setFormValue({
      animal_id: data.animal_id,
      animal_name: data.animal_name,
      animal_desc: data.animal_desc,
      animal_short: data.animal_short,
    });
  };

  return (
    <div className="mt-10 p-4 rounded-md w-[300px] text-center shadow-card">
      <Link to={`/${data.animal_id}`}>
        <img
          src={data.animal_avatar || ""}
          alt=""
          className="w-[300px] rounded-md object-cover"
        />
        <h1 className=" mt-2">{data.animal_name}</h1>
        <p className="text-black">{shortDescription(data.animal_desc)}</p>
        <h3>{data.animal_price}$</h3>
      </Link>
      {name && (
        <div className="flex items-center justify-around">
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="large"
            onClick={handleEdit}
          />
          <Popconfirm
            title="Bạn có muốn xóa animal này không?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              icon={<DeleteOutlined />}
              size="large"
            />
          </Popconfirm>
        </div>
      )}

      <FormCP
        type="edit"
        setIsFormOpen={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default SingleAnimal;
