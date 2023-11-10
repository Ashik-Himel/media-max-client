import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import GlobalContext from './context/GlobalContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <HelmetProvider>
        <GlobalContext>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalContext>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
)