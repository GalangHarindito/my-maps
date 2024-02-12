import {
  Wrapper,
  SectionTitle,
  Title,
  Devider,
  CloseButton,
  Paragraph,
} from "./style";
import MiniButton from "component/base/button/miniButton";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import MenuBar from "component/base/menu";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper className={open ? "" : "closedBar"}>
      <CloseButton>
        <MiniButton
          icon={
            open ? (
              <AiOutlineDoubleLeft size={20} />
            ) : (
              <AiOutlineDoubleRight size={20} />
            )
          }
          onClick={handleClick}
        />
      </CloseButton>
      <SectionTitle className={open ? "" : "hideTitle"}>
        <Title>KABOOPATEN</Title>
        <Paragraph className={open ? "" : "breakParagh"}>
          This web provide coordinates, polygon and convert for your daily
          needs.
        </Paragraph>
      </SectionTitle>
      <Devider className={open ? "" : "hideDevider"} />
      <MenuBar />
    </Wrapper>
  );
};

export default SideBar;
