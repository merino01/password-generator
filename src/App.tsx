import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from './components/Header'
import AppRouter from './router/router'

function App() {  
  return (
    <Router>
      <Header />
      <main
        className='flex flex-col items-center justify-center flex-grow gap-6 bg-gray-800'
      >
        <AppRouter />
      </main>
      <Toaster richColors position='top-center' />
    </Router>
  )
}

export default App
