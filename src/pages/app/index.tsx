/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

export default function Hello({ }) {

  const { data } = useSession()

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Flex
      bg='gray.200'
      w='100%'
      h='100vh'
      alignItems='center'
      direction='column'
    >
      <Flex
        w='100%'
        h='80px'
        alignItems='center'
        pl='12'
        pr='12'
        bg='gray.700'
      >

        <Box ml='auto'>
          <Menu>
            <MenuButton as={Link} >
              <Stack
                direction='row'
                alignItems='center'
                color='white'
                spacing='4'
              >
                <Stack spacing='0'>
                <Text >Olá, {data?.user.name}</Text>
                <Text fontSize='12px' textAlign='end'> {data?.user.email}</Text>
                </Stack>
                
                <Image
                  src={data?.user?.image}
                  borderRadius='full'
                  boxSize='60px'
                />
              </Stack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => signOut()}>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        ]
      </Flex>
    </Flex>
  );
}

;

/* export const getServerSideProps: GetServerSideProps = async () => {

  const tasks = await prisma.tasks.findMany()

  const data = tasks.map(item => {
    return {
      id: item.id,
      title: item.title,
      isDone: item.isDone,
      date: new Date(item.createdAt).toISOString()
    }
  })
  return {
    props: {
      tasks: data
    }
  }
} */