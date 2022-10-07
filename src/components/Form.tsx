import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Input, message } from "antd";
import { animalService } from "../services";
import { useDispatch } from "react-redux";
import { getAllAnimal } from "../store/petSlice";
import { FormModel } from "../model/form";

interface Props {
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  id: string;
  data: FormModel;
}

const FormCP: React.FC<Props> = ({
  isFormOpen,
  setIsFormOpen,
  type,
  id,
  data,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => form.resetFields(), [data]);

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const onFinish = async (values: any) => {
    const { animal_name, animal_desc, animal_short } = values;
    try {
      if (type === "add") {
        setLoading(true);
        await animalService.addAnimal({
          animal_name,
          animal_desc,
          animal_short,
        });
        await dispatch(getAllAnimal("-id"));
        setLoading(false);
        setIsFormOpen(false);
        message.success("Thêm thành công");
      } else {
        setLoading(true);
        await animalService.updateAnimal(data.animal_id, values);
        await dispatch(getAllAnimal("-id"));
        setLoading(false);
        setIsFormOpen(false);
        message.success("Thêm thành công");
      }
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(id);
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal title="Form" open={isFormOpen} onCancel={handleCancel} footer={null}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={data}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Animal Name"
          name="animal_name"
          rules={[{ required: true, message: "Please input animal name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Animal Short"
          name="animal_short"
          rules={[{ required: true, message: "Please input animal short" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Animal description"
          name="animal_desc"
          rules={[
            { required: true, message: "Please input animal description" },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormCP;
