import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { makeSelectEntryValue } from '../../services/entries/selectors';

// Styles
import './styles.css';

type Props = {
  url?: ?string
};

export class EntryImagesPosterArtUrl extends React.PureComponent<Props> {
  render() {
    const { url } = this.props;
    if (!url) return null;
    return <img src={url} alt="" className="entry-images-poster-art-url" />;
  }
}

const mapStateToProps = createStructuredSelector({
  url: makeSelectEntryValue('images[\'Poster Art\'].url')
});

export default connect(mapStateToProps)(EntryImagesPosterArtUrl);
