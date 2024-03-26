const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz'
const NUMEROS = '0123456789'
const SIMBOLOS = '!@#$%^&*()_+~`|}{[]:;?><,./-='

const allCharacters = ['lowercase', 'uppercase', 'numbers', 'symbols']

interface Props {
  length?: number
  validCharacters?: string[]
}

function generatePassword ({ length = 12, validCharacters = allCharacters }: Props) {  
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

  for (let i = password.length; i < length; i++) {
    password +=
      todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)]
  }

  password
    .split('')
    .sort(() => {
      return 0.5 - Math.random()
    })
    .join('')
  if (password.length > length)
    password = password.slice(0, length)

  return password
}

export default generatePassword
