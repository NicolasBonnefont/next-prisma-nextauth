import { Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import { FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';

export default function Home() {

  return (
    <Flex
      bg='gray.700'
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Stack direction={['column', 'row']} spacing={12}>
        <Stack>
          <Heading color='white'>Login com GitHub</Heading>
          <Text color='white' mb={4}>
            Faça login com sua conta do GitHub.
          </Text>
          <IconButton
            aria-label='Login com Google'
            icon={<FiGithub size={30} />}
            colorScheme={'purple'}
            size='lg'
            onClick={() => signIn('github')}
          />
        </Stack>

        <Stack
          color='white'
        >
          <Heading >Login com Google</Heading>
          <Text mb={4}>
            Faça login com sua conta do GitHub.
          </Text>
          <IconButton
            aria-label='Login com Google'
            icon={<FcGoogle size={30} />}
            bg='white'
            size='lg'
            onClick={() => signIn('google')}
          />
        </Stack>
        

        <Stack
          color='white'
        >
          <Heading >Login com Facebook</Heading>
          <Text mb={4}>
            Faça login com sua conta do Facebook.
          </Text>
          <IconButton
            colorScheme='facebook'
            aria-label='Login com Google'
            icon={<GrFacebook size={30} />}
            size='lg'
            onClick={() => signIn('facebook')}
          />
        </Stack>

      </Stack>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }

  return {
    props: {
    }
  }
}