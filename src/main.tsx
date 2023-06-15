import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext.tsx'

import { Nav } from '~/components/Nav'
import { Home } from '~/pages/Home'
import { About } from '~/pages/About'
import { Posts } from '~/pages/Posts'
import { Post } from '~/pages/Post'
import { Redirect } from '~/pages/Redirect'
import { NotFound } from '~/pages/NotFound'
import { News } from '~/pages/News'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />

            <Route path="/redirect" element={<Redirect />} />

            <Route path="*" element={<NotFound />} />

            <Route path="/news" element={<News />}>
              <Route path=":id" element={<div>Outlet na Rota</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
