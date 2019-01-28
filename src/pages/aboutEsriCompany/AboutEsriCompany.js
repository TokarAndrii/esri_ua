import React from 'react';
import styles from './AboutEsriCompany.module.css';

const AboutEsriCompany = () => (
  <div className={styles.holder}>
    <div className={styles.content}>
      <div className={styles.pageMainImageHolder}>
        <h2>
          Компанія Esri Ukraine надає геоінформаційну платформу світового класу
          для створення на підприємстві чи в установі корпоративної
          геоінформаційної системи.
        </h2>
        <p className={styles.textPage}>
          Наша програмна платформа допомагає компаніям, які займаються
          комерційною діяльністю, державним установам та навчальним закладам
          показувати корпоративні та ситуативні дані через електронну карту й
          вживати своєчасні, важливі рішення, використовуючи весь потенціал
          сучасних геоінформаційних технологій.
        </p>
        <p className={styles.textPage}>
          Починаючи з 1 липня 2012 Esri Ukraine отримала статус міжнародного
          дистриб&apos;ютора Інституту досліджень систем навколишнього
          середовища Esri на території України. Компанія надає послуги з
          постачання ліцензійних програмних продуктів платформи ArcGIS і широкий
          спектр супутніх інформаційно-консультаційних послуг.
        </p>
        <p className={styles.textPage}>
          Понад 500 організацій по всій території України успішно використовують
          рішення на платформі ArcGIS за різними напрямками діяльності, щоб
          отримати розуміння ситуації, дізнатися в якому стані знаходиться
          підприємство, розширити знання про активи, щоб удосконалити робочі
          процеси. Наші клієнти входять в найбільше товариство користувачів ГІС
          у світі, з більш ніж одним мільйоном користувачів в 300 000
          організаціях, що знаходяться в 90 країнах світу.
        </p>
        <p className={styles.textPage}>
          Щоб забезпечити нашим клієнтам максимальну віддачу від інвестицій в
          наші програмні продукти, компанія Esri Ukraine має партнерські
          відносини з багатьма організаціями на території України в різних
          сферах економіки. Також ми маємо доступ до глобальної партнерської
          мережі Esri, в яку входять 2000 компаній по всьому світу, для того,
          щоб допомогти нашим клієнтам впровадити та підтримувати ГІС будь-якої
          складності.
        </p>
      </div>
    </div>
  </div>
);

export default AboutEsriCompany;