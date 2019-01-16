import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import navigationListActions from '../../../redux/navigationListActions';

class NavigationMenuItem extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleEscapeKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleEscapeKeyPress);
  }

  handleToggleIsOpenSubMenu = id => {
    const { onClick } = this.props;
    onClick(id);
  };

  handleEscapeKeyPress = e => {
    if (e.key === 'Escape') {
      const { onSetAllsubMenuFalse } = this.props;
      onSetAllsubMenuFalse();
    }
  };

  handleWindowClick = e => {
    const { onSetAllsubMenuFalse, isOpenSubMenu } = this.props;

    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    if (!isTargetInsideContainer && isOpenSubMenu !== false) {
      onSetAllsubMenuFalse();
    }
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
          ref={this.containerRef}
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
  onSetAllsubMenuFalse:
    navigationListActions.SET_ALL_NAVLIST_ITEM_IS_OPEN_SUBMENU_TO_FALSE,
};

export default connect(
  mstp,
  mdtp,
)(NavigationMenuItem);
