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
import MapPolygon from "component/fragment/menuFeatures/polygon";

const MenuBar = () => {
  const [id, setId] = useState("");

  let menuFeatures;
  switch (id) {
    case 1:
      menuFeatures = <FindLocation />;
      break;
    case 2:
      menuFeatures = <MapPolygon />;
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
              <div key={item.id}>
                <ChildBar className={id === item.id ? 'active' : ''} key={item.id} onClick={() => handleClick(item.id)}>
                  <Icon>{item.icon}</Icon>
                  <TitleBar>{item.menuLabel}</TitleBar>
                </ChildBar>

                <WrapperFeaturesMenu
                  className={id === item.id ? "displayChildren" : ""}
                >
                  {menuFeatures}
                </WrapperFeaturesMenu>
              </div>
            );
          })}
      </WrapperBar>
    </>
  );
};

export default MenuBar;
