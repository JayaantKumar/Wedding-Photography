import React from 'react';
import ContactForm from '../sections/ContactForm';
import CTA from '../sections/CTA';

const ContactPage = () => {
  return (
    <div className="pt-0">
      <ContactForm />
      {/* Optional: You can keep or remove the CTA section below the form */}
       <CTA /> 
    </div>
  );
};

export default ContactPage;