import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render( //onde ira ser renderizado
  <StrictMode>
    <BrowserRouter>
      <App /> {/*o que ira ser renderizado*/}
    </BrowserRouter>
  </StrictMode>,
)
