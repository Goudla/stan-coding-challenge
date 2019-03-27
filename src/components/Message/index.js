import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class Message extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="message">
        {children}
      </div>
    );
  }
}

export default Message;
