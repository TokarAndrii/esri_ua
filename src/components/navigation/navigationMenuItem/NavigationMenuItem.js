import React, { Component } from 'react';
import navList from '../../../assets/navList';

class NavigationMenuItem extends Component {
  onClick = id => {
    const item = navList.filter(currItem => currItem.id === id)[0];
    console.log(item, 'item');
    item.isOpenSubMenu = true;
  };

  render() {
    const { className, name, lineClassName } = this.props;
    return (
      <>
        <div className={className} type="button">
          {name}
          <span className={lineClassName} />
        </div>
      </>
    );
  }
}

export default NavigationMenuItem;
