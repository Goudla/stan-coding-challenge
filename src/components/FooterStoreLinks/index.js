import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterStoreLinks extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-store-links">
        {children}
      </div>
    );
  }
}

export default FooterStoreLinks;
