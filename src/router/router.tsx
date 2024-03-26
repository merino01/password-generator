import { Route, Routes } from 'react-router-dom'
import PasswordGenerator from '../views/PasswordGenerator';
import MyPasswords from '../views/MyPasswords';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<PasswordGenerator />} />
    <Route path="/mypasswords" element={<MyPasswords />} />
  </Routes>
);

export default AppRouter;