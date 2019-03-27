import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class FlexGrid extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="flex-grid">
        {children}
      </div>
    );
  }
}

export default FlexGrid;
