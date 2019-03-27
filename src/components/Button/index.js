import * as React from 'react';
import { Link } from "react-router-dom";

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Button extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <Link to="/" className="button">
        {children}
      </Link>
    );
  }
}

export default Button;
