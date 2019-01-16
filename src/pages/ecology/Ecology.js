import React from 'react';
import styles from './Ecology.module.css';

const Ecology = () => (
  <div className={styles.holder}>
    <div className={styles.content}>
      <div className={styles.pageMainImageHolder}>
        <h2 сlassName={styles.pageTitle}>Екологія</h2>
        <div className={styles.separator} />
        <img
          alt="logo"
          src="https://via.placeholder.com/800x500"
          className={styles.pageMainImage}
        />
      </div>
      <p className={styles.textPage}>
        Об&apos;єднання людей, земель і біологічне різноманіття. Інтерактивна
        взаємодія видів, екосистем і генетики створюють полотно біорізноманіття.
        Esri полегшує діалог між захисниками природних ресурсів, урядом і
        бізнесом. Отримайте доступ до даних від численних дисциплін і накладіть
        їх на карту. Будьте готові проаналізувати причину і наслідок.
        Використовуйте платформу Esri для спільної роботи та знаходження шляхів
        для збереження довкілля і видів.
      </p>
    </div>
  </div>
);

export default Ecology;
