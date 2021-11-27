import PizzaComp from "./pizza";
import pizzas from "./pizza.json";

const App =()=>{
  return (
    <ul>
      {pizzas.map(item=>{
        return <PizzaComp key={item.id} pizza={item} />
      })}
    </ul>
  )
}

export default App;