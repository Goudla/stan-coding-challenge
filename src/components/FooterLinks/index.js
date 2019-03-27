import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterLinks extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-links">
        {children}
      </div>
    );
  }
}

export default FooterLinks;
