import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class SubNavbarHeading extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <h2 className="sub-navbar-heading">
        {children}
      </h2>
    );
  }
}

export default SubNavbarHeading;
