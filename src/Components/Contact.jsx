// eslint-disable-next-line no-unused-vars
import React from 'react'


//Understanding React Props


function Contact(contactProps) {
  return (
    <>
    <p>My name is {contactProps.name} and my number is {contactProps.number} .</p>
    
    </>
  )
}

export default Contact