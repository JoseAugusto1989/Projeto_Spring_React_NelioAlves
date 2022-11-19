import styled from "styled-components";
import InputLogin from "./Input";
import ButtonLogin from "./ButtonLogin";
import passwordIcon from "../../assets/img/Password.png";
import nameIcon from "../../assets/img/Add-User.png";
import emailIcon from "../../assets/img/Message.png";

const ContainerMain = styled.div`
  background-color: #e9e9e9;
  display: flex;
  margin-top: 220px;
  align-items: center;
  justify-content: center;
`;

const ContainerLogin = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 2px 2px 10px;
  border-radius: 8px;
  display: flex;
  width: 1016px;
  height: 590px;
`;

const ContainerLeft = styled.div`
  border-radius: 8px 0 0;
  background: #484747;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: #ffffff;
`;

const NameLogin = styled.h1`
  margin-top: 80px;
  font-size: 32px;
  line-height: 100px;
  letter-spacing: -2px;
  padding: 10px 0px;
`;

const TextContainerLeft = styled.h2`
  margin-top: 30px;
  font-size: 16px;
  line-height: 50px;
`;

const Button = styled.button`
  margin-top: 50px;
  box-sizing: border-box;
  width: 220px;
  height: 60px;
  background: #a3a3a3;
  border: 2px solid #ffffff;
  border-radius: 30px;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 190px;
`;

const LetterContainer = styled.h1`
  margin-top: 60px;
  font-size: 34px;
  color: #484747;
`;

const LetterData = styled.h2`
  font-size: 18px;
  line-height: 22px;
  color: #aaa9a9;
`;

const SpacingInput = styled.div`
  margin-top: 20px;
  padding: 10px;
`;

const Login = () => {
  return (
    <ContainerMain>
      <ContainerLogin>
        <ContainerLeft>
          <NameLogin>OPTIMIZATIONSYSTEM</NameLogin>
          <TextContainerLeft>Bem vindo de volta!</TextContainerLeft>
          <TextContainerLeft>Acesse sua conta agora mesmo</TextContainerLeft>

          <ButtonLogin width={222}>ENTRAR</ButtonLogin>
        </ContainerLeft>

        <ContainerRight>
          <LetterContainer>Crie sua conta</LetterContainer>
          <LetterData>Preencha seus dados</LetterData>

          <SpacingInput>
            <InputLogin icon={nameIcon} type="text" placeholder="Nome" />
          </SpacingInput>
          <SpacingInput>
            <InputLogin icon={emailIcon} type="email" placeholder="Email" />
          </SpacingInput>
          <SpacingInput>
            <InputLogin
              icon={passwordIcon}
              type="password"
              placeholder="Senha"
            />
          </SpacingInput>

          <ButtonLogin width={300}>CADASTRAR</ButtonLogin>
        </ContainerRight>
      </ContainerLogin>
    </ContainerMain>
  );
};

export default Login;
