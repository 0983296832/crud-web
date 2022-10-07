import React from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const Login: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    setTimeout(() => {
      if (values.username === "admin" && values.password === "admin") {
        dispatch(login());
        message.success("Đăng nhập thành công");
        setIsModalOpen(false);
      } else message.success("Đăng nhập thất bại");
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Đăng Nhập"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
