import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class NavbarColLeft extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="navbar-col-left">
        {children}
      </div>
    );
  }
}

export default NavbarColLeft;
