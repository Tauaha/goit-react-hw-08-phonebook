import {  useState, React } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactsForm/ContactsForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsApi';





function ContactsForm () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] =useState('');
   
 
 const handleInputNameChange=(e)=>{
    const { name, value } = e.target;
    switch(name){
      case 'name':
        setContactName(value)
        break;
        case 'number':
          setContactNumber(value)
          break; 
        default: return
         }
  };
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber
    };
   const chekContact = contacts.some(item => item.name === contactName)
   if (chekContact) {
     return (
       alert(`${contactName} is already in contacts.`)
     );
   }
   dispatch(addContact(newContact));
    cleanInput();
  }

  const cleanInput=()=> {
    return(
      setContactName(''),
      setContactNumber('')
    )
     
    
  }
     return(
        <form onSubmit={handleOnSubmit} className={styles.form}>
      <label>Name</label>
      <Input
        type="text" name="name"
        className={styles.input} 
    color='#276749'
    width='auto'
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={contactName}
    onChange={handleInputNameChange}
    placeholder='Enter your name'
    _placeholder={{ color: 'inherit' }}
  />
    <label>Number</label>
    <Input
        type="tel"
        name="number"
        className={styles.input} 
    color='#276749'
    width='auto'
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    value={contactNumber}
        onChange={handleInputNameChange}
    placeholder='Enter your number'
    _placeholder={{ color: 'inherit' }}
  />
  <Button   border='2px'
  borderColor='#276749'   color='#276749' variant='outline' className={styles.button} type="submit">Add contacts
  </Button>
      </form>
  )
       }

ContactsForm.propTypes ={
   onSubmit: PropTypes.func.isRequired

}        

export default ContactsForm





