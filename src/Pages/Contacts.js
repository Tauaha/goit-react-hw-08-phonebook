import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import ContactsForm from 'components/ContactsForm/ContactsForm';
import { selectorIsLoading } from 'redux/selectors';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { contactsApi } from 'redux/contactsApi';
import ContactFilter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import styles from '../components/ContactsForm/ContactsForm.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(contactsApi());
  }, [dispatch]);

  return (
    <>
     
     <h1 className={styles.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={styles.title}>Find contacts by name</h2>
      <ContactFilter />
      {isLoading && <Loader/>}
      <h2 className={styles.title}>Contacts</h2>
      <ContactList/>
      <Outlet/>
    </>
  );
}
