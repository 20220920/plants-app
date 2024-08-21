import { createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer";

//Define the first user state

const initialState = {
    user: null,
    isFetching: false,
    effor: false,
};

//Manage the state globally
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return(
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error: state.error,
            dispatch,
        }}>
          {children}
        </AuthContext.Provider>
    )
}