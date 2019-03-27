import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class SubNavbar extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="sub-navbar">
        {children}
      </div>
    );
  }
}

export default SubNavbar;
