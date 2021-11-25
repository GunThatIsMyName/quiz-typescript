import React,{createContext, useContext, useState} from "react";

type IProps = {
    loading:boolean;
    mini:string;
  };

type IProvider={
    children:React.ReactNode;
}
const UserContext = createContext<IProps|undefined>(undefined);

const UserProvider=({children}:IProvider)=>{
    const [loading,setLoading]=useState(false)
    const [mini,setMinji]=useState("hello")
    return (
        <UserContext.Provider value={{loading,mini}}> 
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext=()=>{
    const context=  useContext(UserContext);
    if(!context)throw new Error("ㅈㅔ바ㄹ 열ㅁㅣ 배잖ㅏ")
    return context;
}

export default UserProvider;