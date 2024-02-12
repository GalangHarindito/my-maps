import { Wrapper, WrapperContent, Copyright, Extra } from "./style";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Wrapper>
      <WrapperContent>
        <Copyright><strong>Copyright @{year}</strong></Copyright>
        <Extra>Galang Harindito</Extra>
      </WrapperContent>
    </Wrapper>
  );
};

export default Footer;
