import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { useAppState } from '../state/store';
import ModelDropdown from './ModelDropdown';
import SetAPIKey from './SetAPIKey';
import TaskUI from './TaskUI';
import OptionsDropdown from './OptionsDropdown';
import AICard from './AICard';
import RecCard from './RecCard';
import logo from '../assets/img/icon_128.png';
import * as amplitude from '@amplitude/analytics-browser';
import theme from './theme';
amplitude.init('ee62116ebda9d6653956595dc3b461a6');

const App = () => {
  const openAIKey = useAppState((state) => state.settings.openAIKey);
  const [showMain, setShowMain] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMain(true);
  };

  if (showMain) {
    return (
      <ChakraProvider theme={theme}>
        <Box
          fontSize="lg"
          w="full"
          h="full"
          display="flex"
          flexDirection="column"
        >
          <HStack mb={4} px={8} pt={8} alignItems="center">
            <img
              src={logo}
              width={32}
              height={32}
              className="App-logo"
              alt="logo"
            />

            <Heading as="h1" size="lg" flex={1}>
              Owloops AI
            </Heading>
            <HStack spacing={2}>
              <ModelDropdown />
              <OptionsDropdown />
            </HStack>
          </HStack>
          {openAIKey ? <TaskUI /> : <SetAPIKey />}
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="row" // Ensures items are in a row
        justify="center" // Center items horizontally
        align="center" // Center items vertically
        wrap="nowrap" // Prevent wrapping
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        bg="#0f172a"
        color="#d8dee9"
        p="4"
        gap="2" // Minimal gap for the appearance of a thin separator
        w="full"
      >
        <Box
          display="flex"
          flexDirection="row" // Align children in a row
          borderColor="#4A5568"
          borderWidth="0.5px"
          bg="#1e293b"
          rounded="md"
          boxShadow="xl"
          color="#d8dee9"
        >
          <AICard onLearnMore={handleLearnMoreClick} />
          <Divider
            orientation="vertical"
            height="auto"
            borderColor="#4A5568"
            borderWidth="0.5px"
          />
          <RecCard />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
