import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import i18n from './i18n';
import App from './App.tsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
      </I18nextProvider>
  </StrictMode>
)
