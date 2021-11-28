import styled from "styled-components";
import { IData } from "../cartType/cart.type";
import CartItem from "./cartItem";

type CartProps = {
  cartItems: IData[];
  handleRemoveFromCart: () => void;
  getTotalItem: (item: IData[]) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  handleRemoveFromCart,
  getTotalItem,
}) => {
  return (
    <Wrapper>
      <h1>My Shopping List</h1>
      {cartItems.length === 0 ? <p>No Items in the cart</p> : null}
      {cartItems.map((item) => {
        return <CartItem />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Cart;
