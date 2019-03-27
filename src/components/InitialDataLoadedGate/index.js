import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { makeSelectInitialDataLoaded } from '../../services/initialDataLoaded/selectors';

type Props = {
  children: React.Node,
  initialDataLoaded?: boolean,
  LoadingComponent: React.Node
};

export class InitialDataLoadedGate extends React.PureComponent<Props> {
  render() {
    const { children, initialDataLoaded, LoadingComponent } = this.props;
    if (!initialDataLoaded) {
      return LoadingComponent;
    }

    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  initialDataLoaded: makeSelectInitialDataLoaded()
});

export default connect(mapStateToProps)(InitialDataLoadedGate);
