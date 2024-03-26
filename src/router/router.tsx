import { Route, Routes } from 'react-router-dom'
import PasswordGenerator from '../views/PasswordGenerator';
import MyPasswords from '../views/MyPasswords';

const _routes = [
  {
    path: "/",
    element: <PasswordGenerator />
  },
  {
    path: "/mypasswords",
    element: <MyPasswords />
  }
]

const AppRouter = () => (
  <Routes>
    {
      _routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))
    }
  </Routes>
);

export default AppRouter;