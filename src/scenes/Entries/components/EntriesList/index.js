import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import FlexGrid from '../../../../components/FlexGrid';
import Col from '../../../../components/Col';
import EntriesListItem from './components/EntriesListItem';

// Selectors
import { selectEntryTitles } from './selectors';

type Props = {
  entryTitles: Array<string>
};

/**
 * A container for displaying a list of entries
 */
export class EntriesList extends React.PureComponent<Props> {
  render() {
    const { entryTitles } = this.props;
    if (!entryTitles || !entryTitles.length) return null;
    return (
      <FlexGrid>
        {entryTitles.map((entryTitle: string) =>
          <Col key={entryTitle}>
            <EntriesListItem entryTitle={entryTitle} />
          </Col>
        )}
      </FlexGrid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  entryTitles: selectEntryTitles
});

export default connect(mapStateToProps)(EntriesList);
