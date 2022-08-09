import React from "react";
import useModal from "./modal/hook/useModal";
import { ReactComponent as Menu } from "../assets/svg/bars-solid.svg";
import Form from "./Form";

const MenuBtn = () => {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      className="menu-btn"
      onClick={() => openModal(<Form />)}
    >
      <Menu />
    </button>
  );
};

export default MenuBtn;
