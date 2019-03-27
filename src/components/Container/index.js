import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Container extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="container">
        {children}
      </div>
    );
  }
}

export default Container;
