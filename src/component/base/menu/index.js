import { menuSidebar } from "utils/menuSidebar";
import {
  WrapperBar,
  ChildBar,
  Icon,
  TitleBar,
  WrapperFeaturesMenu,
} from "./style";
import { useState } from "react";

const MenuBar = ({ children }) => {
  const [id, setId] = useState("");

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <>
      <WrapperBar>
        {menuSidebar &&
          menuSidebar.map((item) => {
            return (
              <>
                <ChildBar key={item.id} onClick={() => handleClick(item.id)}>
                  <Icon>{item.icon}</Icon>
                  <TitleBar>{item.menuLabel}</TitleBar>
                </ChildBar>

                <WrapperFeaturesMenu
                  className={id === item.id ? "displayChildren" : ""}
                >
                  <p>ssssssssssssssss</p>
                </WrapperFeaturesMenu>
              </>
            );
          })}
      </WrapperBar>
    </>
  );
};

export default MenuBar;
