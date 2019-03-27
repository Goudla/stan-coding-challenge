import * as React from 'react';
import { Link } from "react-router-dom";

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class NavbarHeading extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <span className="navbar-heading">
        <Link to="/">
          <h1>
              {children}
          </h1>
        </Link>
      </span>
    );
  }
}

export default NavbarHeading;
