import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'


createRoot(document.getElementById('root')!).render(
  /**O StrictMode roda a aplicação mais de uma vez para garantir o sucesso */
  <StrictMode>      
    <App/>
  </StrictMode>,
)
