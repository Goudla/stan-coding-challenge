import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import Message from '../Message';

// Selectors
import { makeSelectError } from '../../services/error/selectors';

type Props = {
  children: React.Node,
  error?: string
};

export class ErrorGate extends React.PureComponent<Props> {
  render() {
    const { children, error } = this.props;
    if (error) {
      return <Message>{error}</Message>;
    }

    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError()
});

export default connect(mapStateToProps)(ErrorGate);
