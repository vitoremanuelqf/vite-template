import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthContextProvider } from './contexts/AuthContext.tsx'

import App from './App.tsx'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
