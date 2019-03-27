import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadEntries } from '../../../../services/entries/actions';

type Props = {
  loadEntries: Function
};

export class EntriesRequest extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.loadEntries();
  }

  render() {
    return null;
  }
}

export default connect(
  null,
  { loadEntries }
)(EntriesRequest);
