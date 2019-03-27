import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterSocialLink extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <a href="https://www.stan.com.au/" className="footer-social-link">
        {children}
      </a>
    );
  }
}

export default FooterSocialLink;
