import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Col extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="col">
        {children}
      </div>
    );
  }
}

export default Col;
