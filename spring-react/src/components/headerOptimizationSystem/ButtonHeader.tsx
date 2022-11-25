import styled from "styled-components";

export const Button = styled.button`
  color: white;
  margin-top: 20px;
  text-transform: uppercase;
  height: 60px;
  font-size: 16px;
  background-color: #938E8E;
  border-radius: 8px;
  width: ${(p: { width?: number | string }) => p.width}px;
`;

export default Button;
