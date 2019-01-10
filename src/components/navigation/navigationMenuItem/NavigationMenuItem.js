import React, { Component } from 'react';
import { connect } from 'react-redux';
import navigationListActions from '../../../redux/navigationListActions';

class NavigationMenuItem extends Component {
  handleToggleIsOpenSubMenu = id => {
    const { onClick } = this.props;
    onClick(id);
  };

  render() {
    const { className, name, lineClassName, id } = this.props;
    return (
      <>
        <div
          className={className}
          type="button"
          onClick={() => this.handleToggleIsOpenSubMenu(id)}
          onKeyPress={() => null}
        >
          {name}
          <span className={lineClassName} />
        </div>
      </>
    );
  }
}

const mstp = state => ({
  navList: state.navigationList,
});

const mdtp = {
  onClick: navigationListActions.TOGGLE_NAVLIST_ITEM_IS_OPEN_SUBMENU,
};

export default connect(
  mstp,
  mdtp,
)(NavigationMenuItem);
