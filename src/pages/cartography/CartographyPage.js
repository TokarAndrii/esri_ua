import React from 'react';
import styles from './CartographyPage.module.css';

const CartographyPage = () => (
  <div className={styles.holder}>
    <div className={styles.content}>
      <div>
        <h2 сlassName={styles.pageTitle}>Картографування</h2>
        <div className={styles.separator} />
        <img
          alt="logo"
          src="https://via.placeholder.com/800x300"
          className={styles.pageMainImage}
        />
      </div>
      <p className={styles.textPage}>
        Отримайте більше від інвестицій в картографію. Платформа Esri дозволяє
        вам один раз зібрати дані й використовувати їх постійно. Ефективно
        керуйте цілісністю даних і отримуйте доступ до них у будь-який час в
        будь-якому місці. Створюйте високоякісні авторитетні картографічні та
        топографічні карти, дані та сервіси, необхідні для успішної роботи вашої
        організації. Розробляйте стратегічні картографічні продукти для ваших
        клієнтів, щоб допомогти їм у вирішенні місцевих і національних проблем.
      </p>
    </div>
  </div>
);

export default CartographyPage;
