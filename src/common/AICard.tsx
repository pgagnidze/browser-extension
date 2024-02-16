import React from 'react';
import { Image, Text, Button, Flex } from '@chakra-ui/react';
import logo from '../assets/img/ow-ai.svg';

const AICard = ({ onLearnMore }: { onLearnMore: () => void }) => (
  <Flex
    flexDirection="column"
    align="center"
    textAlign="center"
    p="4"
    w="100%" // Adjust width to take full space available
    h="auto"
    m="0" // Remove margin to glue to the separator
  >
    <Image src={logo} boxSize="50px" margin="auto" />
    <Text fontSize="md" my="2">
      Owloops AI
    </Text>
    <Text fontSize="xs" mb="4">
      Harness the power of AI to optimize your workflows.
    </Text>
    <Button colorScheme="blue" size="sm" onClick={onLearnMore}>
      Learn More
    </Button>
  </Flex>
);

export default AICard;
