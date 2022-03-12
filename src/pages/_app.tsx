import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

function App({
  Component,
  pageProps: { session, ...pageProps }

}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS={true}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default App