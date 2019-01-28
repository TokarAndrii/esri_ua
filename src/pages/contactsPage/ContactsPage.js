import React from 'react';
import styles from './ContactsPage.module.css';

const ContactsPage = () => (
  <div className={styles.holder}>
    <div className={styles.content}>
      <div className={styles.pageMainImageHolder}>
        <p className={styles.textPage}>
          <b> Маркетинг</b>
          <br />
          <br />
          (044) 502-41-21 03115, Київ, вул. А. Петрицького, буд. 4
          <br />
          <br />
          e-mail: esriwebukraine@gmail.com
          <br />
          <br />
          Режим роботи: пн – пт 09:00 до 18:00
          <br />
          <br />
          Вихідні: субота, неділя
        </p>
      </div>
    </div>
  </div>
);

export default ContactsPage;
