interface Props {
  id: string
  label: string
  checked: boolean
  value: string
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox = ({ id, label, checked, value, onChange }: Props) => {
  label = label.charAt(0).toUpperCase() + label.slice(1)
  
  return (
    <div className='flex items-center gap-4'>
      <input
        id={id}
        type='checkbox'
        name='valid-characters'
        value={value}
        className='cursor-pointer'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className='text-zinc-300'>{label}</label>
    </div>
  )
}

export default CustomCheckbox
