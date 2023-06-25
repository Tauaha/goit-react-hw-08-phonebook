import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input } from '@chakra-ui/react'
import styles from '../ContactsForm/ContactsForm.module.css'
const ContactFilter =()=> {
   const {filter} = useSelector(selectFilter)
    const dispatch = useDispatch()
      const changeFilter = e => {
    dispatch(setFilter(e.target.value))
  };
return(
    <>
    
    <Input
     type="text" value={filter}  onChange={changeFilter}
        className={styles.input} 
    color='#276749'
    width='auto'
    placeholder='Filter'
    _placeholder={{ color: 'inherit' }}
  />


    </>
)
}

ContactFilter.propTypes = {
 value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,  ]),
 onChange: PropTypes.func.isRequired    
       
}
export default ContactFilter