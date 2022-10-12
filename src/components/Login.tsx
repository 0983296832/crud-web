import React from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const Login: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    setTimeout(() => {
      if (values.username === "admin" && values.password === "admin") {
        dispatch(login());
        message.success(t("login_success"));
        setIsModalOpen(false);
      } else {
        message.error(t("login_error"));
        setIsModalOpen(false);
      }
    }, 500);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={t("login")}
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
          label={t("user")}
          name="username"
          rules={[{ required: true, message: t("user_message") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("pass")}
          name="password"
          rules={[{ required: true, message: t("pass_message") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t("submit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
