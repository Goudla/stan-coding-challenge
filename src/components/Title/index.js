import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Title extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="title">
        {children}
      </div>
    );
  }
}

export default Title;
