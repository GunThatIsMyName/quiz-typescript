// import React,{createContext, useContext, useReducer, useState} from "react";
// import { initstate, reducer } from "../reducer/UserReducer";

// type IProps = {
//     loading:boolean;
//     mini:string;
//   };

// type IProvider={
//     children:React.ReactNode;
// }
// const UserContext = createContext<IProps|undefined>(undefined);

// const UserProvider=({children}:IProvider)=>{
//     const [state,dispatch]=useReducer(reducer,initstate)
//     return (
//         <UserContext.Provider value={{...state}}> 
//             {children}
//         </UserContext.Provider>
//     )
// }

// export const useUserContext=()=>{
//     const context=  useContext(UserContext);
//     if(!context)throw new Error("ㅈㅔ바ㄹ 열ㅁㅣ 배잖ㅏ")
//     return context;
// }

// export default UserProvider;



// // 


import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;