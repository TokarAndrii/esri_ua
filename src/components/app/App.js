import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from '../../pages/home_page/HomePage';
import AboutPage from '../../pages/about_company_page/AboutPage';
import MailUsPage from '../../pages/mail-us/MailUsPage';
import Ecology from '../../pages/ecology/Ecology';
import PageNotFound from '../../pages/page_not_found/PageNotFound';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigation from '../navigation/NavigationContainer';
import FooterNavigation from '../footerNavigation/FooterNavigation';

import SocialIcon from '../footer/socialsIcons/SocialIconComponent';

import navList from '../../assets/navList';

import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Header className={styles.header}>
      <Link to="/">
        <img
          alt="logo"
          src="/images/logo_small.png"
          className={styles.logoImg}
        />
      </Link>
      <Navigation navigationList={navList} />
    </Header>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/mail-us" component={MailUsPage} />
      <Route path="/ecology" component={Ecology} />
      <Route component={PageNotFound} />
    </Switch>
    <img src="https://via.placeholder.com/700x460" alt="appPageBanner" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic cumque
      animi. Nobis fugit, sint esse optio facere perspiciatis velit? Eos
      molestiae obcaecati reiciendis doloremque dolore ducimus, neque
      praesentium quasi deleniti, velit facere odit magni necessitatibus sed
      fugit! Minus dicta a at quo, dignissimos vitae consequuntur. Tempore
      asperiores quo aliquid a, consequuntur iure voluptates aut ipsa vel
      accusamus blanditiis nam adipisci provident! Perspiciatis vitae laboriosam
      inventore cupiditate nisi voluptate, odio dolorum adipisci nostrum quo
      distinctio enim asperiores eius sunt ea suscipit, sint omnis delectus
      dolore voluptas aliquam tempora possimus, officia neque! Quisquam fugit
      tenetur veritatis, unde maxime sint beatae excepturi?
    </p>
    <div className={styles.line} />
    <Footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerSocialsLinksHolder}>
          <h4 className={styles.footerSocialsLinksHolderTitle}>
            Долучайтеся до нас:
          </h4>
          <SocialIcon
            iconImgUrl="/images/icons/facebook.png"
            iconImgUrlHover="/images/icons/facebookHover.png"
            to="/"
          />
          <SocialIcon
            iconImgUrl="/images/icons/instagram.png"
            iconImgUrlHover="/images/icons/instagramHover.png"
            to="/"
          />
          <SocialIcon
            iconImgUrl="/images/icons/youtube.png"
            iconImgUrlHover="/images/icons/youtubeHover.png"
            to="/"
          />
          <SocialIcon
            iconImgUrl="/images/icons/linkedin.png"
            iconImgUrlHover="/images/icons/linkedinHover.png"
            to="/"
          />
          <SocialIcon
            iconImgUrl="/images/icons/twitter.png"
            iconImgUrlHover="/images/icons/twitterHover.png"
            to="/"
          />
          <SocialIcon
            iconImgUrl="/images/icons/google-plus.png"
            iconImgUrlHover="/images/icons/google-plus-hover.png"
            to="/"
          />
        </div>
        <div className={styles.footerEmailUsHolder}>
          <h4 className={styles.footerSocialsLinksHolderTitle}>
            Написати листа:
          </h4>
          <SocialIcon
            iconImgUrl="/images/icons/email.png"
            iconImgUrlHover="/images/icons/emailHover.png"
            to="/mail-us"
          />
        </div>
        <div className={styles.footerLinksHolder}>
          <h4 className={styles.footerSocialsLinksHolderTitle}>
            Розуміння GIS:
          </h4>
          <Link className={styles.footerLink} to="/">
            Відео матеріали
          </Link>
          <Link className={styles.footerLink} to="/">
            Що таке GIS
          </Link>
          <Link className={styles.footerLink} to="/">
            Map Book
          </Link>
        </div>
        <div className={styles.footerLinksHolder}>
          <h4 className={styles.footerSocialsLinksHolderTitle}>
            Платформа ArcGIS:
          </h4>
          <Link className={styles.footerLink} to="/">
            ArcGIS Online
          </Link>
          <Link className={styles.footerLink} to="/">
            ArcGIS для Розробників
          </Link>
          <Link className={styles.footerLink} to="/">
            ArcGIS Desktop
          </Link>
          <Link className={styles.footerLink} to="/">
            ArcGIS для Організацій
          </Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <FooterNavigation navigationList={navList} />
      </div>
      <div className={styles.footerRow}>Esri Україна 2019</div>
    </Footer>
  </div>
);

export default App;
