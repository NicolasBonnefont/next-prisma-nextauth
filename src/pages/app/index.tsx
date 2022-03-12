import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const Hello: React.FC = () => {
  const { data } = useSession()
  return (
    <Flex
      bg='gray.700'
      w='100%'
      h='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Stack p='4'>
        <Heading color='white'>Seja bem vindo: {JSON.stringify(data?.user?.name)}</Heading>
        <Button
          colorScheme={'purple'}
          size='lg'
          onClick={() => signOut()}
        >
          Deslogar
        </Button>
      </Stack>


    </Flex>
  );
}

export default Hello;