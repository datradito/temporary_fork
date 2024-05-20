import Link from "next/link";

import {
  Container,
  Divider,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

async function getData() {
  const res = await fetch("http://localhost:8000/restaurants");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Restaurant {
  _id: number;
  name: string;
  address: string;
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <Container>
      <Heading as="h2" size="xl" paddingY={6}>
        WakeUp Labs Restaurant App
      </Heading>
      <Divider />
      <Heading as="h3" size="md" paddingY={2}>
        Select a Restaurant to start your order
      </Heading>
      <List>
        {data.map((restaurant: Restaurant) => {
          return (
            <ListItem key={restaurant._id}>
              <Link
                href={`/restaurant/${restaurant._id}/${encodeURIComponent(
                  restaurant.name
                )}`}
              >
                {restaurant.name} - {restaurant.address}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
