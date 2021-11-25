import { useUserContext } from "./context/UserContext";

const App=()=> {
  const {loading,mini} = useUserContext();
  console.log(loading,mini)
  return (
    <>
      <h1>React Quiz</h1>
      <button>start</button>
      <p>scroe</p>
      <p>loading...</p>
      <button>next question</button>
    </>
  );
}

export default App;
