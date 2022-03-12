import { Button, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import React from 'react';


const Hello: React.FC = () => {
  return (
    <>
      <Text>HELLO</Text>
      <Button
        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
      >Deslogar</Button>
    </>
  );
}

export default Hello;