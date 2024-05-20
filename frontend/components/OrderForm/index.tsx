"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  List,
  ListItem,
  Select,
  VStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { Product } from "@/app/restaurant/[_id]/[name]/page";

import axios from "axios";

const waitressNames = ["Alice", "Beth", "Clara", "Diana", "Eva"];

interface OrderItem {
  name?: string;
  _id?: string;
  productId: string;
  quantity: number;
}

const OrderForm = ({
  restaurantId,
  products,
}: {
  restaurantId: Product["restaurant_id"];
  products: OrderItem[];
}) => {
  const [waitress, setWaitressName] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const router = useRouter();

  console.log("orderItems", orderItems);

  const addProductToOrder = () => {
    if (!selectedProduct || quantity < 1) {
      alert("Please select a product and enter a valid quantity");
      return;
    }
    const existingItem = orderItems.find(
      (item) => item.productId === selectedProduct
    );
    if (existingItem) {
      setOrderItems(
        orderItems.map((item) =>
          item.productId === selectedProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setOrderItems([...orderItems, { productId: selectedProduct, quantity }]);
    }
    setSelectedProduct("");
    setQuantity(1);
  };

  const handleQuantityChange = (productId: string, delta: any) => {
    setOrderItems(
      orderItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDeleteItem = (productId: string) => {
    setOrderItems(orderItems.filter((item) => item.productId !== productId));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!waitress || orderItems.length === 0) {
      alert(
        "Please enter a waitress name and select a product or add at least one product to the order."
      );
      return;
    }
    const order = {
      waitress,
      restaurantId,
      products: orderItems,
    };

    try {
      await axios.post("http://localhost:8000/orders", order);
      console.log("Order Payload", order);
      alert("Order created successfully");
      router.push("/");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Error creating order");
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
    >
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Waitress Name</FormLabel>
          <Select
            placeholder="Select waitress"
            value={waitress}
            onChange={(e) => setWaitressName(e.target.value)}
          >
            {waitressNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Select Product</FormLabel>
          <Select
            placeholder="Select product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
          />
        </FormControl>
        <Button onClick={addProductToOrder} colorScheme="blue">
          Add Product
        </Button>
        <List>
          {orderItems.map((item, index) => (
            <ListItem key={index}>
              <HStack>
                <Text>
                  {products.find((p) => p._id === item.productId)?.name}
                </Text>
                <Text> - Quantity: {item.quantity}</Text>
                <IconButton
                  icon={<MinusIcon />}
                  aria-label="Decrease quantity"
                  onClick={() => handleQuantityChange(item.productId, -1)}
                  isDisabled={item.quantity <= 1}
                />
                <IconButton
                  icon={<AddIcon />}
                  aria-label="Increase quantity"
                  onClick={() => handleQuantityChange(item.productId, 1)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete item"
                  onClick={() => handleDeleteItem(item.productId)}
                />
              </HStack>
            </ListItem>
          ))}
        </List>
        <Button
          type="submit"
          colorScheme="teal"
          isDisabled={orderItems.length === 0}
        >
          Create Order
        </Button>
      </VStack>
    </Box>
  );
};

export default OrderForm;
