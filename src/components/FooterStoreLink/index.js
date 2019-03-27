import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterStoreLink extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-store-link">
        {children}
      </div>
    );
  }
}

export default FooterStoreLink;
