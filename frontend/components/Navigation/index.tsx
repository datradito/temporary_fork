import { Box, Container, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <Container maxW="container.xl">
      <Box bg="teal.500" p={4}>
        <Flex justify="space-around">
          <Link as={NextLink} href="/" color="white" fontWeight="bold">
            Home
          </Link>
          <Link as={NextLink} href="/orders" color="white" fontWeight="bold">
            Orders
          </Link>
          <Link as={NextLink} href="/menus" color="white" fontWeight="bold">
            Menus
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navigation;
