import React from "react";

import logo from "../assets/img/Logo.jpg";
import { ContainerHeader, LinkName } from "./Header.styles";
import { SizeImage } from "./NotificationButton.styles";

const Header = () => {
  return (
    <ContainerHeader>
      <SizeImage src={logo} alt="Logo" />
      <h1>DS Meta</h1>
      <LinkName>
        Desenvolvido por
        <a href="https://github.com/JoseAugusto1989"> @Guto Oliveira</a>
      </LinkName>
    </ContainerHeader>
  );
};

export default Header;
