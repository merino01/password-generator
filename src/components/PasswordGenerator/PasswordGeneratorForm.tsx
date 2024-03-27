import { useState } from "react"
import CustomInput from "../common/CustomInput"
import CustomCheckbox from "../common/CustomCheckbox"

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
      <CustomInput
        type='text'
        name='pass-length'
        placeholder='Password length'
        autocomplete='off'
        onInput={handleLengthInput}
      />

      <div className='flex flex-col'>
        <CustomCheckbox
          id='chars-lowercase'
          label='lowercase'
          checked={lowercase}
          value="lowercase"
          onChange={handleCheckboxesChange}
        />

        <CustomCheckbox
          id='chars-uppercase'
          label='uppercase'
          checked={uppercase}
          value="uppercase"
          onChange={handleCheckboxesChange}
        />

        <CustomCheckbox
          id='chars-numbers'
          label='numbers'
          checked={numbers}
          value="numbers"
          onChange={handleCheckboxesChange}
        />

        <CustomCheckbox
          id='chars-symbols'
          label='symbols'
          checked={symbols}
          value="symbols"
          onChange={handleCheckboxesChange}
        />
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

