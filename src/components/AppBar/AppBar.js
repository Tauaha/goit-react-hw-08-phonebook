
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'components/Hooks/useAuth';
import { TabList, Tabs } from '@chakra-ui/react';



export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    < >
         <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    
           <Navigation />
      {isLoggedIn ? 
        <UserMenu /> : <AuthNav/>}
         </TabList>
</Tabs>
    
    </>
  );
};
