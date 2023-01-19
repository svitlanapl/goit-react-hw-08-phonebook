import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';


// Якщо маршрут обмежений і користувач увійшов у систему, відобразіть <Navigate> для перенаправлення
// Інакше візуалізуйте компонент

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};