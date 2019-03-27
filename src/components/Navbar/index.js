import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Navbar extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="navbar">
        {children}
      </div>
    );
  }
}

export default Navbar;
