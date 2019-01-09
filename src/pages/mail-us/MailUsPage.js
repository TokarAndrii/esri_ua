import React from 'react';
import MailUsForm from '../../components/mail-us-form/MailUsForm';

const MailUsPage = ({ children }) => (
  <>
    <h2>Форма відправлення листа</h2>
    <MailUsForm />
    {children}
  </>
);

export default MailUsPage;
