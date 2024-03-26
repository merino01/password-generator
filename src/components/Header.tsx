import { Link } from "react-router-dom"
import IconGithub from "./Icons/IconGithub"

const Header = () => {
  return (
    <header className='bg-black h-[35px] md:h-[50px] flex justify-between items-center px-4'>
      <nav>
        <ul className="flex items-center gap-4 text-white">
          <Link to="/" className="menu-option">Password generator</Link>
          <Link to="/mypasswords" className="menu-option">My passwords</Link>
        </ul>
      </nav>
      
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
