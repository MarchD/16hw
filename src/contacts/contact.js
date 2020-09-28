import React, {Component} from 'react';
import phone from '../img/phone.svg';

const Contact = ({firstName, lastName, phone, gender}) => (
    <div className='contact'>
        <img src={phone} alt=''/>
        <div className='contact-item'>{firstName}</div>
        <div className='contact-item'>{lastName}</div>
        <div className='contact-item'>{phone}</div>
        <div className='contact-item'>{gender}</div>
    </div>
)

export default Contact;