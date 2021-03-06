import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterSocialLinks extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-social-links">
        {children}
      </div>
    );
  }
}

export default FooterSocialLinks;
