import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default App