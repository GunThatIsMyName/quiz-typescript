// const App=()=> {
//   console.log(minji,"??")
//   return (
//     <>
//       <h1>React Quiz</h1>
//       <button>start</button>
//       <p>scroe</p>
//       <p>loading...</p>
//       <button>next question</button>
//     </>
//   );
// }

// export default App;


import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.


type IState={
  value:number
}
const initValue:IState={
  value:0
}
const reducer=(state: IState, action: any) =>{
  switch (action.type) {
    default:
      throw new Error('Unhandled action');
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initValue);
  console.log(state,"@@@")
  // const onIncrease = () => dispatch({ type: 'INCREASE' });
  // const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button >+1</button>
        <button >-1</button>
      </div>
    </div>
  );
}

export default App;