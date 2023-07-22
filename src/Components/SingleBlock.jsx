import { Box, Select, Text } from "@chakra-ui/react";

const SingleBlock = ({ block }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      shadow="md"
      fontSize={"10px"}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Block Information
      </Text>
      <Box my={2}>
        <Select placeholder="All Transactions" popperPlacement="bottom-start">
          {block.transactions.map((tx, index) => (
            <option key={index} style={{ fontSize: "9px", maxWidth: "100px" }}>
              {tx}
            </option>
          ))}
        </Select>
      </Box>
      <Text>
        <b>Hash:</b> {block.hash}
      </Text>
      <Text>
        <b>Parent Hash:</b> {block.parentHash}
      </Text>
      <Text>
        <b>Number:</b> {block.number}
      </Text>
      <Text>
        <b>Timestamp:</b> {new Date(block.timestamp * 1000).toLocaleString()}
      </Text>
      <Text>
        <b>Nonce:</b> {block.nonce}
      </Text>
      <Text>
        <b>Difficulty:</b> {block.difficulty}
      </Text>
      <Text>
        <b>Gas Limit:</b> {parseInt(block.gasLimit._hex, 16)}
      </Text>
      <Text>
        <b>Gas Used:</b> {parseInt(block.gasUsed._hex, 16)}
      </Text>
      <Text>
        <b>Miner:</b> {block.miner}
      </Text>
      <Text>
        <b>Extra Data:</b> {block.extraData}
      </Text>
      <Text mt={4} fontWeight="bold">
        Total Transactions: {block.transactions.length}
      </Text>

      {/* <Text mt={4}>
        <b>Base Fee Per Gas:</b> {block.baseFeePerGas.hex}
      </Text> */}
    </Box>
  );
};

export default SingleBlock;
