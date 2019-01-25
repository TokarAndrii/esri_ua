import React, { Component } from 'react';
import { connect } from 'react-redux';
import newsOperations from './duck/newsOperations';
import ActualNewsPage from './ActualNewsPage';

class ActualNewsPageContainer extends Component {
  componentDidMount() {
    const { fetchActualNews } = this.props;
    fetchActualNews();
  }

  render() {
    return <ActualNewsPage {...this.props} />;
  }
}

const mstp = state => ({
  actualNews: state.actualNews,
  isLoading: state.isLoading,
});

const mdtp = {
  fetchActualNews: newsOperations.fetchActualNews,
};

export default connect(
  mstp,
  mdtp,
)(ActualNewsPageContainer);
