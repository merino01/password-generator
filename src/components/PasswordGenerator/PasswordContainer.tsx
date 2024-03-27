import IconCopy from "../Icons/IconCopy"

interface Props {
  password: string
  onCopy: (text: string) => void
}

const PasswordContainer = ({ password, onCopy }: Props) => {
  return (
    <>
      <div
        className='min-h-[48px] min-w-[172px] max-w-sm bg-neutral-700 text-slate-200 py-3 pl-4 pr-8 rounded-sm relative'
      >
        <span
          className='block w-full truncate'
        >
          {password}
        </span>
        <button
          className='absolute cursor-pointer right-2 top-4'
          onClick={() => onCopy(password)}
        >
          <IconCopy />
        </button>
      </div>
      
      <span className="-ml-8 text-sm text-white opacity-60">Password length: {password.length}</span>
    </>
  )
}

export default PasswordContainer

