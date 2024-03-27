import { useState } from "react";
import NewAccountForm from "../components/MyPasswords/NewAccountForm";
import PasswordsList from "../components/MyPasswords/PasswordsList";

export interface Account {
  id: string;
  mail: string;
  username: string;
  password: string;
  platform: string;
}

const MyPasswords = () => {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: '1',
      mail: 'guillermo@gmail.com',
      username: 'Guillermo',
      password: '123456',
      platform: 'Google'
    }
  ])
  
  return (
    <section className="md:p-12">
      <NewAccountForm onNewAccount={(account) => {
        setAccounts([...accounts, account])
      }} />
      
      <PasswordsList
        passwords={accounts}
      />
    </section>
  );
}

export default MyPasswords;
