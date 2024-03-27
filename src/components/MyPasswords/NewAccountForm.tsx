import { useEffect, useState } from "react"
import { Account } from "../../views/MyPasswords"
import CustomInput from "../common/CustomInput"

interface Props {
  onNewAccount?: (account: Account) => void
}

const NewAccountForm = ({ onNewAccount }: Props) => {
  const [validForm, setValidForm] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [platform, setPlatform] = useState<string>('')
  
  useEffect(() => {
    if (email.trim() !== '' && username.trim() !== '' && password.trim() !== '' && platform.trim() !== '') {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [email, username, password, platform])
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const platform = formData.get('platform') as string

    if (!email || email.trim() === '') return
    if (!username || username.trim() === '') return
    if (!password || password.trim() === '') return
    if (!platform || platform.trim() === '') return
    
    onNewAccount && onNewAccount({
      id: String(Math.floor(Math.random() * 100000)),
      mail: email,
      username,
      password,
      platform
    })
    form.reset()
  }
  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-start gap-2 mb-5 md:flex-row md:flex-wrap">
        <CustomInput
          type="text"
          name="platform"
          placeholder="Platform"
          onInput={(e) => {
            const { value } = e.target as HTMLInputElement
            setPlatform(value)
          }}
        />
        
        <CustomInput
          type="text"
          name="email"
          placeholder="Email"
          onInput={(e) => {
            const { value } = e.target as HTMLInputElement
            setEmail(value)
          }}
        />
        <CustomInput
          type="text"
          name="username"
          placeholder="Username"
          onInput={(e) => {
            const { value } = e.target as HTMLInputElement
            setUsername(value)
          }}
        />
        <CustomInput
          type="text"
          name="password"
          placeholder="Password"
          onInput={(e) => {
            const { value } = e.target as HTMLInputElement
            setPassword(value)
          }}
        />
      </div>
      
      <button
        type="submit"
        className="self-stretch w-full px-4 py-2 rounded-sm md:w-36 bg-zinc-200 text-neutral-900 disabled:cursor-not-allowed disabled:bg-zinc-500"
        disabled={!validForm}
      >
        Add Account
      </button>
    </form>
  )
}

export default NewAccountForm
