const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz'
const NUMEROS = '0123456789'
const SIMBOLOS = '!@#$%^&*()_+~`|}{[]:;?><,./-='

function generatePassword (passwordLength: number, validCharacters: string[]) {
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

  return password
}

export default generatePassword
