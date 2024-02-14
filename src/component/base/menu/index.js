import { menuSidebar } from "utils/menuSidebar";
import {
  WrapperBar,
  ChildBar,
  Icon,
  TitleBar,
  WrapperFeaturesMenu,
} from "./style";
import { useState } from "react";
import FindLocation from "component/fragment/menuFeatures/findLocation";

const MenuBar = () => {
  const [id, setId] = useState("");

  let menuFeatures;
  switch (id) {
    case 1:
      menuFeatures = <FindLocation />;
      break;
    case 2:
      menuFeatures = "kkkk";
      break;
    case 3:
      menuFeatures = "jjjj";
      break;
    default:
      
  }

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
                <ChildBar className={id === item.id ? 'active' : ''} key={item.id} onClick={() => handleClick(item.id)}>
                  <Icon>{item.icon}</Icon>
                  <TitleBar>{item.menuLabel}</TitleBar>
                </ChildBar>

                <WrapperFeaturesMenu
                  className={id === item.id ? "displayChildren" : ""}
                >
                  {menuFeatures}
                </WrapperFeaturesMenu>
              </>
            );
          })}
      </WrapperBar>
    </>
  );
};

export default MenuBar;
