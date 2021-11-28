import { Drawer, Grid, LinearProgress } from "@material-ui/core";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Cart from "./cartComp/cart";
import Item from "./cartComp/item";
import { IData } from "./cartType/cart.type";

const BASE_URL = "https://fakestoreapi.com/products";

const fetchData = async (): Promise<IData[]> => {
  const response = await fetch(BASE_URL);
  const data = response.json();
  return data;
};

const CartApp = () => {
  const { data, isLoading, isError } = useQuery<IData[]>("props", fetchData);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IData[]);

  const getTotalItem = (item: IData[]) => null;
  const handleAddToCart = (clickItem: IData) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (isError) {
    return <h1> Some thing goes wrong ... </h1>;
  }
  return (
    <section>
      <Drawer open={cartOpen} anchor="right" onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          getTotalItem={getTotalItem}
        />
      </Drawer>
      <Button onClick={() => setCartOpen(true)}>
        item: {getTotalItem(cartItems)}
      </Button>
      <Grid container spacing={3}>
        {data &&
          data.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart} />
              </Grid>
            );
          })}
      </Grid>
    </section>
  );
};

const Button = styled.span`
  position: fixed;
  top: 2rem;
  right: 5%;
  width: 3rem;
  height: 3rem;
  display: block;
  border-radius: 50%;
  background: teal;
`;

export default CartApp;
