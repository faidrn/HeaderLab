import AppRouter from './routes/AppRouter'
import { ThemeProvider } from './theme/ThemeProvider'
import './App.css'

function App() {
  

  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
