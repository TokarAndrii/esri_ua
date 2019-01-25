import React, { Component } from 'react';
import styles from './SocialIconComponent.module.css';

export default class SocialIconComponentMail extends Component {
  state = { img: '' };

  componentDidMount() {
    const { iconImgUrl } = this.props;
    this.setState({ img: iconImgUrl });
  }

  onMouseEnterHandler = () => {
    const { iconImgUrlHover } = this.props;
    this.setState({ img: iconImgUrlHover });
  };

  onMouseOutHandler = () => {
    const { iconImgUrl } = this.props;
    this.setState({ img: iconImgUrl });
  };

  render() {
    const { img } = this.state;
    const { to } = this.props;
    return (
      <a href={to}>
        <img
          className={styles.socialIcon}
          style={{ width: '24px', height: '24px' }}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseOutHandler}
          alt="facebook"
          src={img}
        />
      </a>
    );
  }
}
