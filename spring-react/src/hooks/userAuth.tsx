import { useContext } from "react"
import { AuthContext } from "./authContext";

const userAuth = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(AuthContext);

    return context;
}

export default userAuth;