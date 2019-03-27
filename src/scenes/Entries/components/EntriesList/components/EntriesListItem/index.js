import React from 'react';

// Components
import EntryImagesPosterArtUrl from '../../../../../../components/EntryImagesPosterArtUrl';
import Title from '../../../../../../components/Title';

type Props = {
  entryTitle: string
};

class EntriesListItem extends React.PureComponent<Props> {
  render() {
    const { entryTitle } = this.props;
    return (
      <div>
        <div>
          <EntryImagesPosterArtUrl entryTitle={entryTitle} />
        </div>
        <div>
          <Title>{entryTitle}</Title>
        </div>
      </div>
    );
  }
}

export default EntriesListItem;
