import { useEffect, useState } from 'react'
import Form from '../components/Form'
import PasswordContainer from '../components/PasswordContainer'
import generatePassword from '../components/lib/generate-password'
import copy from '../components/lib/copy'

const defaultPassword = generatePassword({})

function PasswordGenerator () {  
  const [password, setPassword] = useState<string>(defaultPassword)
  
  useEffect(() => {
    copy(password)
  }, [password])
  
  const submitForm = (form: HTMLFormElement) => {
    const formData = new FormData(form)
    const validCharacters = formData.getAll('valid-characters') as string[]
    const passwordLength = Number(formData.get('pass-length')) || 12

    const password = generatePassword({ length: passwordLength, validCharacters })
    setPassword(password)
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
