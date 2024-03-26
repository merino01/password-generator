import { Toaster } from 'sonner'
import PasswordGenerator from './views/PasswordGenerator'
import Header from './components/Header'

function App() {  
  return (
    <>
      <Header />
      <main
        className='flex flex-col items-center justify-center flex-grow gap-6 bg-gray-800'
      >
        <PasswordGenerator />
      </main>
      <Toaster richColors position='top-center' />
    </>
  )
}

export default App
