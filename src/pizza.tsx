interface Pizza{
    id:number;
    name:string;
    description:string;
    price:number;
}

interface props{
    pizza:Pizza
}

const PizzaComp =({pizza}:props)=>{
    const {name,description,price}=pizza;
    return <li>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
    </li>
}

export default PizzaComp;