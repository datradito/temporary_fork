import { Box, Container, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { Product } from "../restaurant/[_id]/[name]/page";

export interface Orders {
  restaurantId: string;
  waitress: string;
  state: string;
  products: Product[];
}

async function getRestaurantsOrders(_id: string) {
  const res = await fetch(`http://localhost:8000/orders`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Orders = async ({ params }: { params: { _id: string } }) => {
  const data = await getRestaurantsOrders(params._id);
  console.log(data);
  return (
    <Container>
      <Heading as="h2" paddingY={4}>
        Restaurants Orders
      </Heading>

      <List>
        {data.map((order: Orders) => {
          return (
            <ListItem key={order.restaurantId}>
              <Box>RESTAURANT ID: {order.restaurantId}</Box>
              <Box>
                {order.waitress}
                <Box as="span" color="gray.600" fontSize="sm" paddingX={2}>
                  {order.state}
                </Box>
              </Box>
              <Box color="red" paddingY={2}>
                {order.products.map((product: Product) => {
                  console.log(product);
                  return (
                    <ListItem key={product._id}>
                      <Box>
                        {product.productId}
                        <Box as="span" color="gray.600" fontSize="sm">
                          Quantity: {product.quantity}
                        </Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                          {product.description}
                        </Box>
                      </Box>
                    </ListItem>
                  );
                })}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Orders;
