import styled from "styled-components";

export const ContainerMain = styled.div`
  background-color: ${(p: { color?: string }) => p.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 90px;

  @media (max-width: 650px) {
    display: inline;
    align-items: flex-start;
    width: 100%;
    border-radius: 0 0 8px 8px;
  }
`;

export const ContainerForm = styled.form`
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: white;
  padding: 60px 90px 60px;
  border: 2px solid #000000;
  border-radius: 8px;
  margin-top: 60px;
  box-shadow: 2px 2px 10px;
`;

export const LetterMain = styled.h1`
  margin-top: 40px;
  font-size: 35px;
  text-transform: uppercase;
`;

export const ContainerButton = styled.div`
  padding: 10px 150px 0 150px;
`;

export const Input = styled.input`
  background: #e8e8e8;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 60px;
  color: #747373;
  outline: 0;
  border-radius: 8px;
`;

export const Logo = styled.img`
  margin-top: 10px;
  border-radius: 8px;

  @media (max-width: 650px) {
    text-align: center;
    align-items: center;
  }
`;
