import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import OrderForm from "@/components/OrderForm";

async function getRestaurantProducts(_id: string) {
  const res = await fetch(`http://localhost:8000/products/restaurant/${_id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export interface Product {
  [x: string]: any;
  _id: string;
  name: string;
  price: number;
  description: string;
  restaurant_id: string;
}

const Restaurant = async ({
  params,
}: {
  params: { _id: string; name: string };
}) => {
  const data = await getRestaurantProducts(params._id);
  console.log(data);
  console.log(params);
  return (
    <Container>
      <Heading as="h2" paddingY={4}>
        Restaurant {decodeURIComponent(params.name)} - Menu
      </Heading>

      <Text as="b">Restaurant ID: {params._id}</Text>

      <OrderForm restaurantId={params._id} products={data} />

      <List>
        {data.map((product: Product) => {
          return (
            <ListItem key={product._id}>
              <Box>
                {product.name}
                <Box as="span" color="gray.600" fontSize="sm">
                  $ {product.price}
                </Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  {product.description}
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Restaurant;
