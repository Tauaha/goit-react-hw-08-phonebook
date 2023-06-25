import {  NavLink } from 'react-router-dom';
import { useAuth } from 'components/Hooks/useAuth';
import { Tab, TabList, Tabs } from '@chakra-ui/react';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
  <>
       <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>
     <NavLink  to="/">
        Home
      </NavLink>
      </Tab>
     
      {isLoggedIn && (
        <Tab> <NavLink to="/contacts">
          Contacts
        </NavLink>
        </Tab>
         )}
              </TabList>
</Tabs>
  </>
  );
};
