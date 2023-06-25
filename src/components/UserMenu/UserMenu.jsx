
import { useAuth } from 'components/Hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/Operations';
import styles from '../UserMenu/UserMenu.module.css'

import { Button, Tab} from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (<>
 <div className={styles.container}>
    <p >Welcome, {user.name}</p>
    <Tab> <Button   border='2px'
  borderColor='#276749'   color='#276749' variant='outline' className={styles.button} type="button" onClick={() => dispatch(logOut())}>
  Logout
  </Button></Tab>
   
  </div>
  </>
  
  );
};
