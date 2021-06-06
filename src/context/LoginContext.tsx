import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type LoginContext = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>
}

export const ContextDefaultValue: LoginContext = {
  isLogged: false,
  setIsLogged: ()=>{},
  token: '',
  setToken: ()=>{}
};

export const LoginContext = createContext<LoginContext>(ContextDefaultValue);

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("Error while reading context!");
  }
  return context;
};


export const LoginContextProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        setIsLogged,
        token,
        setToken
      }}>
      {children}
    </LoginContext.Provider>
  );
};


export const AppContextConsumer = LoginContext.Consumer;
