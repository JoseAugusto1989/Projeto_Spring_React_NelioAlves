import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import nameIcon from "../../assets/img/Add-User.png";
import emailIcon from "../../assets/img/Message.png";
import passwordIcon from "../../assets/img/Password.png";
import userAuth from "../../hooks/userAuth";
import ButtonLogin from "./ButtonLogin";
import InputLogin from "./Input";

const ContainerMain = styled.div`
  display: flex;
  text-align: center;
  border-radius: 8px;
  padding: 180px 360px 0 360px;

  @media (max-width: 1100px) {
    padding: 180px 0 0 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    padding: 40px 0 0 0;
  }

  @media (max-width: 400px) {
    width: 20%;
    flex-direction: column;
    padding: 40px 0 0 0;
  }
`;

const TextContainerLeft = styled.h2`
  margin-top: 30px;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  padding: 20px;
  color: white;
`;

const ContainerLeft = styled.div`
  background-color: ${(p: { color?: string }) => p.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  text-align: center;
  padding: 60px;
  border-radius: 8px 0 0 8px;

  border: 1px solid #000000;
  box-shadow: 2px 2px 10px;

  @media (max-width: 1100px) {
    padding: 80px 0 0 0;
  }

  @media (max-width: 600px) {
    display: inline;
    align-items: flex-start;
    border-radius: 8px 8px 0 0;
    width: 100%;
  }
`;

const ContainerRight = styled.div`
  background-color: ${(p: { color?: string }) => p.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  text-align: center;
  padding: 60px;
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 2px 10px;
  border: 1px solid #000000;

  @media (max-width: 1100px) {
    display: inline;
    align-items: flex-start;
    width: 100%;
    border-radius: 0 0 8px 8px;
  }
`;

const LetterContainer = styled.h1`
  margin-top: 60px;
  font-size: 34px;
  color: #484747;
  text-align: center;
`;

const LetterData = styled.h2`
  font-size: 18px;
  line-height: 22px;
  color: #aaa9a9;
  text-align: center;
  margin-bottom: 40px;
`;

const DivTest = styled.div`
  margin: 5px;
`;

const LetterLogo = styled.h1`
  margin-top: 60px;
  color: white;
  letter-spacing: -2px;
  text-align: center;
`;

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: yup.string().min(6, "A senha deve ter no mínimo 6 dígitos").required("A senha é obrigatória"),
  }).required();

const Login = () => {
 // const { register, handleSubmit, watch, formState: {errors}, } = useForm({ resolver: yupResolver(schema) });
  const handleRegistration = (data: any) => console.log(data);

  const { signin } = userAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Por favor preencha todos os campos");
      return;
    }

    if (signin) {
      const res = signin(email, password);

      if (res) {
        setError(res);
        return;
      }
      //NavigateBefore("/home")
    }
  };

  return (
    <ContainerMain>
      <ContainerLeft color="#484747">
        <LetterLogo>OPTIMIZATION SYSTEM</LetterLogo>
        <TextContainerLeft>Bem vindo de volta!</TextContainerLeft>
        <TextContainerLeft>Acesse sua conta agora mesmo</TextContainerLeft>

        <DivTest>
          <ButtonLogin>ENTRAR</ButtonLogin>
        </DivTest>
      </ContainerLeft>

      <ContainerRight color="white">
        <LetterContainer>Crie sua conta</LetterContainer>
        <LetterData>Preencha seus dados</LetterData>
      
        <form onSubmit={(handleRegistration)}>
          <InputLogin
            icon={nameIcon}
            type="text"
            
            placeholder="Nome"
          />

          <InputLogin
            icon={emailIcon}
            type="email"
            placeholder="Email"
            
          />

          <InputLogin
            icon={passwordIcon}
            type="password"
            placeholder="Senha"
            
          />
        </form>

        <DivTest>
          <ButtonLogin onClick={handleLogin}>CADASTRAR</ButtonLogin>
        </DivTest>
      </ContainerRight>
    </ContainerMain>
  );
};

export default Login;
function setName(value: string) {
  throw new Error("Function not implemented.");
}
function yupResolver(schema: any): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> | undefined {
  throw new Error("Function not implemented.");
}

