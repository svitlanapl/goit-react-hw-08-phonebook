import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// Якщо маршрут приватний і користувач увійшов у систему, відтворіть компонент
// В іншому випадку візуалізуйте <Navigate> для перенаправлення

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
    
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};