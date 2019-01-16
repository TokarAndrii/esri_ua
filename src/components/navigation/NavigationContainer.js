import { connect } from 'react-redux';
import Navigation from './Navigation';

const mstp = state => ({
  navigationList: state.navigationList,
});

export default connect(mstp)(Navigation);
