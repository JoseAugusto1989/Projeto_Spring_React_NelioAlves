import { useNavigate } from "react-router-dom";
import { IconHeader, ImageIcon , ButtonLog} from "./InputHeader.styles";

type Props = {
    icon?: string
    children?: React.ReactNode
}

const InputHeader = ({ icon, children }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login")
  }
  return (
    <IconHeader>
      <ImageIcon src={icon} alt="icon" />
      <ButtonLog onClick={handleLogout}>{children}</ButtonLog>
    </IconHeader>
  );
};

export default InputHeader;
