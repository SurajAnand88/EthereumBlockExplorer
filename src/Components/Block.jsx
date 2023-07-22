import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import SingleBlock from "./SingleBlock";

const Block = ({ block }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderColor={"whiteAlpha.500"} border={"2px"} p={3} fontSize={"11px"}>
      {" "}
      <Flex gap={1}>
        <Text>Hash :</Text>
        <Text color={"blue"} onClick={onOpen} isTruncated>
          {block.hash}
        </Text>
      </Flex>
      <Text>Miner : {block.miner}</Text>
      <Text>Number : {block.number}</Text>
      <Text>
        Timestamp: {new Date(block.timestamp * 1000).toLocaleString()}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"10px"}>{block.hash}</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={4}>
            <SingleBlock block={block} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Block;
