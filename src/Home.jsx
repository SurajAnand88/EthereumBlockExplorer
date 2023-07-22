import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestBlockNumber from "./BlockNumber";
import Block from "./Components/Block";
import getBlockNumber from "./functions/getBlockNumber";

const Homepage = () => {
  const latestBlock = useSelector((store) => store.latestBlock);
  const last10Blocks = useSelector((store) => store.last10Blocks);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlockNumber(true, dispatch);
  }, []);

  console.log(last10Blocks, latestBlock);

  return (
    <>
      <Box p={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold">
            EtherBlocks
          </Text>
          <Input
            maxW="sm"
            placeholder="Search addresses or transaction hash"
            size="sm"
          />
        </Flex>
        <LatestBlockNumber blockNumber={latestBlock} />
        <VStack spacing={4}>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            bg="rgba(255, 255, 255, 0.2)"
            boxShadow="lg"
            borderRadius="md"
            w="100%"
            p={4}
            gap={4}
          >
            <Center flexDir="column">
              <Heading size="lg" color="black">
                Latest Blocks
              </Heading>

              {/* Add your block data here */}
              {/* Example: <Text color="black">Block 123456</Text> */}
            </Center>
            <SimpleGrid w={"100%"} columns={{ md: 2, xl: 3 }} spacing={4}>
              {last10Blocks?.map((block, i) => {
                return <Block block={block} key={i} />;
              })}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default Homepage;
