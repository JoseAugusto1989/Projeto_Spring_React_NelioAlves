import icon from "../../assets/img/Add-User.png";
import Button from "./ButtonHeader";
import {
  ContainerButton,
  ContainerHeader,
  ContainerLinks,
  LinksHeader,
  Logo,
} from "./Header.styles";
import Input from "./InputHeader";

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <div>
          <Logo>OPTIMIZATION SYSTEM</Logo>
        </div>

        <ContainerLinks>
          <LinksHeader>funcionalidades</LinksHeader>
          <LinksHeader>planos</LinksHeader>
          <LinksHeader>sobre</LinksHeader>
        </ContainerLinks>

        <ContainerButton>
          <Button width={321}>solicite uma proposta</Button>
        </ContainerButton>
        <ContainerButton>
          <Button width={321}>experimente nosso sistema</Button>
        </ContainerButton>
        <ContainerButton>
          <Input icon={icon} children="Logout" />
        </ContainerButton>
      </ContainerHeader>
    </>
  );
};

export default Header;
