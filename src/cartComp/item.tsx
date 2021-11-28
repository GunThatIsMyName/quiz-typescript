import { Button } from "@material-ui/core";
import styled from "styled-components";
import { IData } from "../cartType/cart.type";

type IProps = {
  item: IData;
  handleAddToCart: (clickItem: IData) => void;
};

const Item = ({ item, handleAddToCart }: IProps) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>add to cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 200px;
    max-width:140px;
    margin:2rem auto;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;

export default Item;
