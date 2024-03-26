import { useState } from 'react'
import IconGithub from './components/Icons/IconGithub'
import Form from './components/Form'
import PasswordContainer from './components/PasswordContainer'
import { Toaster, toast } from 'sonner'

function App() {
  const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz'
  const NUMEROS = '0123456789'
  const SIMBOLOS = '!@#$%^&*()_+~`|}{[]:;?><,./-='
  
  const [password, setPassword] = useState<string>('')
  
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const formEl = ev.target as HTMLFormElement
    const formData = new FormData(formEl)
    const validCharacters = formData.getAll('valid-characters') as string[]
    const passwordLength = Number(formData.get('pass-length')) || 12

    generatePassword(passwordLength, validCharacters)
  }

  const handleFormChange = () => {
    const formEl = document.querySelector('#generate-form') as HTMLFormElement
    const formData = new FormData(formEl)
    const validCharacters = formData.getAll('valid-characters') as string[]
    const passwordLength = Number(formData.get('pass-length')) || 12

    generatePassword(passwordLength, validCharacters)
  }
  
  function generatePassword(passwordLength: number, validCharacters: string[]) {
    const charMap: { [key: string]: string } = {
      'lowercase': MINUSCULAS,
      'uppercase': MAYUSCULAS,
      'numbers': NUMEROS,
      'symbols': SIMBOLOS
    }

    let todosCaracteres = ''
    let password = ''

    for (const option of validCharacters) {
      if (!(option in charMap)) continue
      const chars = charMap[option]
      if (chars) {
        todosCaracteres += chars
        password += chars[Math.floor(Math.random() * chars.length)]
      }
    }

    for (let i = password.length; i < passwordLength; i++) {
      password +=
        todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)]
    }

    password
      .split('')
      .sort(() => {
        return 0.5 - Math.random()
      })
      .join('')
    if (password.length > passwordLength)
      password = password.slice(0, passwordLength)

    setPassword(password)
    copy(password)
  }

  function copy(text: string) {
    navigator.clipboard.writeText(text)
    toast.success('Password copied to clipboard')
  }
  
  return (
    <>
      <main
        className='flex items-center justify-center w-[100vw] h-[100dvh] flex-col gap-6 bg-gray-800'
      >
        <a
          className='text-white text-2xl absolute top-4 right-4'
          href='https://github.com/guillermo403/password-generator'
          target='_blank'
        >
          <IconGithub />
        </a>

        <Form
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        />
        <PasswordContainer
          password={password}
          onCopy={copy}
        />
      </main>
      <Toaster richColors position='top-center' />
    </>
  )
}

export default App
