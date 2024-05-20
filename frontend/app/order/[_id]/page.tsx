import { Product } from "@/app/restaurant/[_id]/[name]/page";
import { Box, Container, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

export interface Order {
  _id: string;
  restaurantId: string;
  waitress: string;
  state: string;
  products: Product[];
}

async function getOrdersByRestaurant(_id: string) {
  const res = await fetch(`http://localhost:8000/orders/${_id}  `);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Orders = async ({ params }: { params: { _id: string } }) => {
  const data = await getOrdersByRestaurant(params._id);
  console.log(data);
  return (
    <Container>
      <Heading as="h2" paddingY={4}>
        Orders for Restaurant_ID: {decodeURIComponent(params._id)}
      </Heading>
      <List>
        {data.map((order: Order) => {
          return (
            <ListItem key={order._id}>
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
                        {product.name}
                        <Box as="span" color="gray.600" fontSize="sm">
                          Quantity: {product.quantity}
                        </Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                          {product.productId}
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
