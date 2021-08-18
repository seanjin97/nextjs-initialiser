import React from 'react';
import {
  Box, Text, Button, Container, VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function about() {
  return (
    <>
      <Box>Hello there</Box>
      <Box m={2} color="red">Tomato</Box>
      <Text fontSize={32} textAlign={['left', 'center']}>What is going on</Text>
      <Button
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}
        borderRadius="10"
      >
        Button

      </Button>
      <Container>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
      </Container>
      <VStack>
        <Container maxW="container.xl">Extra-Large Container</Container>
        <Container maxW="container.lg">Large Container</Container>
        <Container maxW="container.md">Medium Container</Container>
        <Container maxW="container.sm">Small Container</Container>
      </VStack>
      <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="3xl">
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team.
        </Box>
      </Container>
      <motion.div
        animate={{
          x: 100,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
      />
      <motion.div
        style={{
          background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
          height: '100px',
          width: '100px',
          borderRadius: '10px',
        }}
        /**
          Below, the initial and animation field are set to declare a translation
          animation along the horizontal axis "x"
          Hence why we're setting an "x" field in both objects.
        * */
        initial={{
          x: -100,
        }}
        animate={{
          x: 100,
        }}
        /**
          The code below specifies the transition type for our element.
          You can comment the whole transition prop below, and Framer
          Motion will fallback to "smart defaults".

          In this case, since we have a translation, the default transition type is
          spring, so you should see the element moving from left to right and "bounce"
          a when reaching its target state, like a spring!
        * */
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 2,
        }}
      />
      <motion.div
        style={{
          background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
          height: '100px',
          width: '100px',
          borderRadius: '10px',
        }}
        animate={{ x: 100 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      />
    </>

  );
}
