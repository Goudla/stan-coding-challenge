import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { makeSelectLoading } from '../../services/loading/selectors';

type Props = {
  children: React.Node,
  loading?: boolean,
  LoadingComponent: React.Node
};

export class LoadingGate extends React.PureComponent<Props> {
  static defaultProps = {
    loading: true
  }
  render() {
    const { children, loading, LoadingComponent } = this.props;
    if (loading) {
      return LoadingComponent;
    }

    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading()
});

export default connect(mapStateToProps)(LoadingGate);
