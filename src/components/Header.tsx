import IconGithub from "./Icons/IconGithub"

const Header = () => {
  return (
    <header className='bg-black h-[35px] md:h-[50px] flex justify-end items-center px-4'>
      <a
        className='text-2xl text-white'
        href='https://github.com/guillermo403/password-generator'
        target='_blank'
      >
        <IconGithub />
      </a>
    </header>
  )
}

export default Header
