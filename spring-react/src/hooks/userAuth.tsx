import { useContext } from "react"
import { AuthContext } from "./authContext";

type contextType = {
    signin?: (email: string | any, password: string) => string | undefined,
    signout?: (email: string | any, password: string) => string | undefined
}

const userAuth = (): contextType => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(AuthContext);

    return context;
}

export default userAuth;