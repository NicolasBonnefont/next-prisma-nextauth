/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Link, Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { prisma } from '../../lib/prisma';

export default function Hello({ tasks }) {

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
                <Text >Olá, {data?.user.name}</Text>
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

      <Stack>
        {
          tasks.map(item =>

            <Text color='white' key={item.id}> {item.title}</Text>
          )
        }
      </Stack>

    </Flex>
  );
}

;

export const getServerSideProps: GetServerSideProps = async () => {

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
}