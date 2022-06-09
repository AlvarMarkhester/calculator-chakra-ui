import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function CalculatorUI(props) {
  function addDigit(digit) {
    props.dispatch({ type: 'ADD_DIGIT', digit: digit });
  }
  function addOperator(operator) {
    props.dispatch({ type: 'ADD_OPERATOR', operator: operator });
  }
  return (
    <Center
      background="gray.600"
      w="100%"
      h="100%"
      pt="100"
      pb="429"
      flexDirection="column"
    >
      <Text fontSize="6xl">Simple Calculator</Text>
      <Container
        centerContent
        w="350px"
        h="400"
        bg="teal.600"
        borderRadius="10"
        justifyContent="center"
      >
        <Grid
          h="350px"
          w="300px"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap="1px"
        >
          <GridItem colSpan={5}>
            <Box
              w="100%"
              h="100%"
              bg="gray.300"
              borderRadius={5}
              display="flex"
              alignItems="end"
              justifyContent="end"
              flexDirection="column"
              pr="2"
            >
              <Text fontSize="l">
                {props.state.previousOperand} {props.state.operator}
              </Text>
              <Text as="em" fontSize="3xl">
                {props.state.currentOperand}
              </Text>
            </Box>
          </GridItem>
          <Button
            onClick={() => addDigit(7)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            7
          </Button>
          <Button
            onClick={() => addDigit(8)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            8
          </Button>
          <Button
            onClick={() => addDigit(9)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            9
          </Button>
          <GridItem colSpan={2}>
            <Button
              onClick={() => props.dispatch({ type: 'CLEAR_ENTRY' })}
              w="100%"
              h="100%"
              colorScheme="teal"
            >
              CE
            </Button>
          </GridItem>
          <Button
            onClick={() => addDigit(4)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            4
          </Button>
          <Button
            onClick={() => addDigit(5)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            5
          </Button>
          <Button
            onClick={() => addDigit(6)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            6
          </Button>
          <Button
            onClick={() => addOperator('x')}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            x
          </Button>
          <Button
            onClick={() => addOperator('/')}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            ÷
          </Button>
          <Button
            onClick={() => addDigit(1)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            1
          </Button>
          <Button
            onClick={() => addDigit(2)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            2
          </Button>
          <Button
            onClick={() => addDigit(3)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            3
          </Button>
          <Button
            onClick={() => addOperator('-')}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            -
          </Button>
          <GridItem rowSpan={2}>
            <Button
              onClick={() => props.dispatch({ type: 'EVALUATE' })}
              w="100%"
              h="100%"
              colorScheme="teal"
            >
              =
            </Button>
          </GridItem>
          <Button
            onClick={() => props.dispatch({ type: 'CLEAR' })}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            C
          </Button>
          <Button
            onClick={() => addDigit(0)}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            0
          </Button>
          <Button
            onClick={() => addDigit('.')}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            .
          </Button>
          <Button
            onClick={() => addOperator('+')}
            w="100%"
            h="100%"
            colorScheme="teal"
          >
            +
          </Button>
        </Grid>
      </Container>
    </Center>
  );
}

export default CalculatorUI;
