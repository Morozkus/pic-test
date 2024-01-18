import { StoreProvider, BrowserProvider } from './Provides/index'
import './global.css'

function App() {
  return (
    <StoreProvider>
      <BrowserProvider>
      
      </BrowserProvider>
    </StoreProvider>
  )
}

export default App
