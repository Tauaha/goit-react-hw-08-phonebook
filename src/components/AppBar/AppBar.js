
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigetion';
import { useAuth } from 'components/Hooks/useAuth';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    < >
    
           <Navigation />
      {isLoggedIn ? 
        <UserMenu /> : <AuthNav />}
    </>
  );
};
