import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import logo from "../../assets/img/optimizationSystem2.jpg";
import nameIcon from "../../assets/img/Add-User.png";
import emailIcon from "../../assets/img/Message.png";
import passwordIcon from "../../assets/img/Password.png";
import ButtonLogin from "../login/ButtonLogin";
import { IconDesign, ImageIcon } from "../login/Input.styles";
import {
  ContainerForm,
  ContainerMain,
  Input,
  LetterMain,
  Logo,
} from "./styles";
import { Navigate, useNavigate } from "react-router-dom";

type FormValues = {
  name?: string;
  password?: string;
  email?: string;
  icon?: string;
};

const EnterLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  const handleEnterHome = () => {
    navigate("/enterHome");
  };

  return (
    <ContainerMain>
      <Logo src={logo} alt="logo" />
      <LetterMain>Insira seus dados para prosseguir</LetterMain>

      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <IconDesign>
          <ImageIcon src={nameIcon} alt="iconName" />
          <Input placeholder="Nome" {...register("name")} />
        </IconDesign>

        <IconDesign>
          <ImageIcon src={emailIcon} alt="iconEmail" />
          <Input placeholder="Email" type="email" {...register("email")} />
        </IconDesign>

        <IconDesign>
          <ImageIcon src={passwordIcon} alt="iconPassword" />
          <Input placeholder="Senha" {...register("password")} />
        </IconDesign>

        <ButtonLogin onClick={(handleEnterHome)} type="submit">ENTRAR</ButtonLogin>
      </ContainerForm>
    </ContainerMain>
  );
};

export default EnterLogin;
