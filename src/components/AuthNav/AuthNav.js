
import { Tab } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const styles ={
  container: {
    display: 'contents'
  }
}
export const AuthNav = () => {
  return (
    <div style={styles.container}>
        
    <Tab> 
       <NavLink  to="/register">
        Register
      </NavLink>
      </Tab>
    <Tab>  
       <NavLink  to="/login">
        Log In
      </NavLink>
      </Tab>

    
   
    </div>
  );
};
