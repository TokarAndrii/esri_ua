import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from '../../pages/home_page/HomePage';
import AboutPage from '../../pages/about_company_page/AboutPage';
import MailUsPage from '../../pages/mail-us/MailUsPage';
import Ecology from '../../pages/ecology/Ecology';
import CartographyPage from '../../pages/cartography/CartographyPage';
import BusinessPage from '../../pages/business/BusinessPage';
import ArcGisPage from '../../pages/arcgis-page/ArcGisPage';
import EnviPage from '../../pages/envi-page/EnviPage';
import TechSupportPage from '../../pages/tech-support-page/TechSupportPage';
import ActualNews from '../../pages/actual-news-page/ActualNewsPageContainer';
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
      <Route path="/cartography" component={CartographyPage} />
      <Route path="/business" component={BusinessPage} />
      <Route path="/arc-gis" component={ArcGisPage} />
      <Route path="/envi" component={EnviPage} />
      <Route path="/tech-support" component={TechSupportPage} />
      <Route path="/actual-news" component={ActualNews} />
      <Route component={PageNotFound} />
    </Switch>

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
