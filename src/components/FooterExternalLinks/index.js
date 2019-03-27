import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterExternalLinks extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-external-links">
        {children}
      </div>
    );
  }
}

export default FooterExternalLinks;
