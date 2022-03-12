import { Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { FiGithub } from 'react-icons/fi';
export default function Home() {
  return (
    <Flex
      bg='gray.700'
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Stack as='form' >
        <Heading color='white'>Login com GitHub</Heading>

        <Text color='white' mb={4}>
          Faça login com sua conta do GitHub.
        </Text>

        <IconButton
          aria-label='Login com GitHub'
          icon={<FiGithub size={30} />}
          colorScheme={'purple'}
          size='lg'
        />

      </Stack>

    </Flex>
  )
}
