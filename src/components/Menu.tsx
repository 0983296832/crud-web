import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Menu as MenuAtd, message } from "antd";
import { logout } from "../store/userSlice";
import { RootState, AppDispatch } from "../store";
import { useTranslation } from "react-i18next";
import i18next from "../i18n.js";
import ChangeLng from "./ChangeLng";

const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { name } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  console.log(t, i18next);

  const handleLogout = (): void => {
    dispatch(logout());
    message.success("Đăng xuất thành công");
  };

  const menuItem = (
    <MenuAtd
      items={[
        {
          label: <p>Quản lý</p>,
          key: "0",
        },
        {
          label: <p onClick={handleLogout}>Đăng xuất</p>,
          key: "1",
        },
      ]}
    />
  );
  return (
    <div>
      <div className="menu">
        <Link to="/">
          <img src={logo} className="w-10 h-10 cursor-pointer" />
        </Link>
        {name ? (
          <>
            <Dropdown overlay={menuItem}>
              <h1>{t("greeting", { name })}</h1>
            </Dropdown>
            <ChangeLng />
          </>
        ) : (
          <>
            <h1
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="cursor-pointer"
            >
              {t("login")}
            </h1>
            <ChangeLng />
          </>
        )}
      </div>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Menu;
