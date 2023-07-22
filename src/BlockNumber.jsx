import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LatestBlockNumber = ({ blockNumber }) => {
  return (
    <Box py={4}>
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="rgba(255, 255, 255, 0.2)" // Transparent background with opacity
        backdropFilter="blur(5px)" // Adds blur effect to the background
        boxShadow="lg"
        borderRadius="md"
        w="100%"
        h="100px"
      >
        <Center flexDir="column">
          <Heading size="lg" color="black">
            Latest Ethereum Block
          </Heading>
          <Text color="black" fontSize="lg" fontWeight={"bold"}>
            {blockNumber}
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default LatestBlockNumber;
