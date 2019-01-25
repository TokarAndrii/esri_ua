import React from 'react';
import MailUsForm from '../../components/mail-us-form/MailUsForm';
import styles from './MailUsPage.module.css';

const MailUsPage = ({ children }) => (
  <div className={styles.holder}>
    <h2>Форма відправлення листа</h2>
    <MailUsForm />
    {children}
  </div>
);

export default MailUsPage;
