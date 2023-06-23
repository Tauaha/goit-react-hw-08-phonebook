
import { Tab, TabList,Tabs } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
  return (
    <div>
            <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>  <NavLink  to="/register">
        Register
      </NavLink></Tab>
    <Tab>   <NavLink  to="/login">
        Log In
      </NavLink></Tab>
  </TabList>
</Tabs>
    
   
    </div>
  );
};
