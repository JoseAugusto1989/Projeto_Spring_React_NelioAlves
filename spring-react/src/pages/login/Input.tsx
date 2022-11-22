import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: #e8e8e8;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 60px;
  color: #747373;
  outline: 0;
  border-radius: 8px;
`;

const IconDesign = styled.div`
  background: #e8e8e8;
  border-radius: 8px;
  border: none;
  display: flex;
  margin: 10px;
`;

const ImageIcon = styled.img`
  margin: 18px;
`;

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const InputLogin = ({ type, name, placeholder, icon, value }: Props) => {
  return (
    <IconDesign>
      <ImageIcon src={icon} alt="icon" />
      <Input type={type} name={name} placeholder={placeholder} value={value} onChange={(event) => {}} />
    </IconDesign>
  );
};

export default InputLogin;
