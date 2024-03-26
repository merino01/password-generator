import { useState } from "react"

interface Props {
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void
  onChange?: () => void
}

const Form = ({ onSubmit, onChange }: Props) => {
  const [lowercase, setLowercase] = useState<boolean>(true)
  const [uppercase, setUppercase] = useState<boolean>(true)
  const [numbers, setNumbers] = useState<boolean>(true)
  const [symbols, setSymbols] = useState<boolean>(true)

  const handleLengthInput = (ev: React.FormEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement
    const value = target.value
    const num = Number(value)

    if (value === '') return

    if (isNaN(num)) target.value = value.slice(0, value.length - 1)
    if (num < 1) target.value = '1'
    if (num > 1500000) target.value = '1500000'

    onChange && onChange()
  }

  const handleCheckboxesChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const states = {
      lowercase,
      uppercase,
      numbers,
      symbols
    }

    const setters = {
      lowercase: setLowercase,
      uppercase: setUppercase,
      numbers: setNumbers,
      symbols: setSymbols
    }
    
    const target = ev.target as HTMLInputElement
    const name = target.value as keyof typeof states
    
    const newState = !states[name];
    
    if (name in setters) {
      setters[name](newState);
    }

    const newStates = { ...states, [name]: newState };

    if (Object.values(newStates).filter(Boolean).length === 0) {
      setters[name](true);
      return
    }

    onChange && onChange()
  }
  
  return (
    <form className='flex flex-col gap-4' id="generate-form" onSubmit={onSubmit}>
      <input
        type='text'
        name='pass-length'
        placeholder='Password length'
        className='bg-neutral-700 text-slate-200 px-4 py-2 rounded-sm w-[172px] select-none'
        autoComplete='off'
        onInput={handleLengthInput}
      />

      <div className='flex flex-col'>
        <div className='flex items-center gap-4'>
          <input
            id="chars-lowercase"
            type='checkbox'
            name='valid-characters'
            value='lowercase'
            className='cursor-pointer'
            checked={lowercase}
            onChange={handleCheckboxesChange}
          />
          <label htmlFor="chars-lowercase" className='text-zinc-300'>Lowercase</label>
        </div>

        <div className='flex items-center gap-4'>
          <input
            id="chars-uppercase"
            type='checkbox'
            name='valid-characters'
            value='uppercase'
            className='cursor-pointer'
            checked={uppercase}
            onChange={handleCheckboxesChange}
          />
          <label htmlFor="chars-uppercase" className='text-zinc-300'>Uppercase</label>
        </div>

        <div className='flex items-center gap-4'>
          <input
            id="chars-numbers"
            type='checkbox'
            name='valid-characters'
            value='numbers'
            className='cursor-pointer'
            checked={numbers}
            onChange={handleCheckboxesChange}
          />
          <label htmlFor="chars-numbers" className='text-zinc-300'>Numbers</label>
        </div>

        <div className='flex items-center gap-4'>
          <input
            id="chars-symbols"
            type='checkbox'
            name='valid-characters'
            value='symbols'
            className='cursor-pointer'
            checked={symbols}
            onChange={handleCheckboxesChange}
          />
          <label htmlFor="chars-symbols" className='text-zinc-300'>Symbols</label>
        </div>
      </div>

      <button
        className='px-4 py-2 transition bg-green-300 rounded-sm select-none hover:bg-green-400'
        type="submit"
      >
        Generate password
      </button>
    </form>
  )
}

export default Form

