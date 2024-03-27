interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "number" | "search" | "url"
  name: string
  placeholder?: string
  autocomplete?: 'on' | 'off'
}

const CustomInput = (
  {
    type,
    name,
    placeholder = '',
    autocomplete = 'off',
    ...props
  }: Props
) => {
  return (
    <input
      className="px-4 py-2 rounded-sm select-none bg-neutral-700 text-slate-200"
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete}
      {...props}
    />
  )
}

export default CustomInput
