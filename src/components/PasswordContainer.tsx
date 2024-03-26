import IconCopy from "./Icons/IconCopy"

interface Props {
  password: string
  onCopy: (text: string) => void
}

const PasswordContainer = ({ password, onCopy }: Props) => {
  return (
    <div
      className='min-h-[48px] min-w-[172px] max-w-sm bg-neutral-700 text-slate-200 py-3 pl-4 pr-8 rounded-sm relative'
    >
      <span
        className='w-full truncate block'
      >
        {password}
      </span>
      <button
        className='cursor-pointer absolute right-2 top-2'
        onClick={() => onCopy(password)}
      >
        <IconCopy />
      </button>
    </div>
  )
}

export default PasswordContainer

