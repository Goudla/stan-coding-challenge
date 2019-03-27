import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Footer extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="footer">
        {children}
      </div>
    );
  }
}

export default Footer;
