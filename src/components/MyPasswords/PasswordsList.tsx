import { Account } from "../../views/MyPasswords"
import Accordion from "../common/Accordion"
import copy from "../lib/copy"

interface Props {
  passwords: Account[]
}

const PasswordsList = ({ passwords }: Props) => {  
  return (
    <div className="flex flex-col gap-4 mt-10">
      {
        passwords.map((password) => (
          <Accordion key={password.id} title={password.platform}>
            <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
              <span>{password.mail}</span>
              <span
                className="cursor-pointer"
                onClick={() => copy(password.password)}
              >{password.password}</span>
            </div>
          </Accordion>
        ))
      }
    </div>
  )
}

export default PasswordsList
