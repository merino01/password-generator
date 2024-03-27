import { useEffect, useState } from 'react'
import Form from '../components/PasswordGenerator/PasswordGeneratorForm'
import PasswordContainer from '../components/PasswordGenerator/PasswordContainer'
import generatePassword from '../components/lib/generate-password'
import copy from '../components/lib/copy'

const defaultPassword = generatePassword({})

const getPasswordFromLocalStoage = () => {
  const password = localStorage.getItem('lp-$1')
  if (!password) return defaultPassword
  return password
}

const setPasswordToLocalStorage = (password: string) => {
  localStorage.setItem('lp-$1', password)
}

function PasswordGenerator () {
  const [password, setPassword] = useState<string>(getPasswordFromLocalStoage())
  
  useEffect(() => {
    if (password === getPasswordFromLocalStoage()) return
    setPasswordToLocalStorage(password)
    copy(password)
  }, [password])
  
  const submitForm = (form: HTMLFormElement) => {
    const formData = new FormData(form)
    const validCharacters = formData.getAll('valid-characters') as string[]
    const passwordLength = Number(formData.get('pass-length')) || 12

    const password = generatePassword({ length: passwordLength, validCharacters })
    setPassword(password)

    const localStorageMap: { [key: string]: string} = {
      lowercase: 'l',
      uppercase: 'u',
      numbers: 'n',
      symbols: 's'
    }
    Object.keys(localStorageMap).forEach((key) => {
      if (validCharacters.includes(key)) {
        localStorage.setItem(localStorageMap[key], 'true')
      } else {
        localStorage.setItem(localStorageMap[key], 'false')
      }
    })
  }
  
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const formEl = ev.target as HTMLFormElement
    submitForm(formEl)
  }

  const handleFormChange = () => {
    const formEl = document.querySelector('#generate-form') as HTMLFormElement
    submitForm(formEl)
  }
  
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      />
      <PasswordContainer
        password={password}
        onCopy={copy}
      />
    </>
  )
}

export default PasswordGenerator
