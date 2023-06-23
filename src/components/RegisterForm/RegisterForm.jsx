
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/Operations';
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import styles from '../RegisterForm/RegisterForm.module.css'


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">

      <label>
        Username
        <Input
        type="text" name="name"
        className={styles.input} 
    color='#276749'
    width='auto'
    placeholder='Enter your name'
    _placeholder={{ color: 'inherit' }}
  />
      </label>
      <label >
        Email
        <Input
      type="email" name="email" 
      className={styles.input} 
    color='#276749'
    width='auto'
    placeholder='Enter your email'
    _placeholder={{ color: 'inherit' }}
  />
      </label>
      <label >
        Password
        <Input
      type="password" name="password"
      className={styles.input} 
    color='#276749'
    width='auto'
    placeholder='Enter your password'
    _placeholder={{ color: 'inherit' }}
  />
      </label>
      <Button   border='2px'
  borderColor='#276749'   color='#276749' variant='outline'  type="submit">Register
  </Button>
    </form>
  );
};
