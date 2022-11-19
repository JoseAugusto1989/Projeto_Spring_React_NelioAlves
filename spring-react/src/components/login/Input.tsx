import { width } from "@mui/system";
import styled from "styled-components";

const Input = styled.input`
  background: #e8e8e8;
  border: none;
  //font-size: 20px;
 // height: 50px;
  color: #747373;
  outline: 0;
  border-radius: 8px;
 // padding: 6px 10px 0 35px;
`;

const IconDesign = styled.div`
  background: #e8e8e8;
  border-radius: 8px;
  border: none;
  //padding: 6px 6px 6px 8px;
`;

const ImageIcon = styled.img`
    //height: 26px;
   // margin-left: 16px;
`

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  icon?: string;
};

const InputLogin = ({ type, name, placeholder, icon }: Props) => {
  return (
    <IconDesign>
      <ImageIcon src={icon} alt="icon" />
      <Input type={type} name={name} placeholder={placeholder} />
    </IconDesign>
  );
};

export default InputLogin;
