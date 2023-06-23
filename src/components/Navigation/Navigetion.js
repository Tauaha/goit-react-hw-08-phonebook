import { Link } from 'react-router-dom';
import { useAuth } from 'components/Hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </>
  );
};
