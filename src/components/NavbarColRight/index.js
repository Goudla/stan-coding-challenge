import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class NavbarColRight extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="navbar-col-right">
        {children}
      </div>
    );
  }
}

export default NavbarColRight;
