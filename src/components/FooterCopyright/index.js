import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FooterCopyright extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer-copyright">
        {children}
      </div>
    );
  }
}

export default FooterCopyright;
