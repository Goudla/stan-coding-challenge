import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class PageWrapper extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="page-wrapper">
        {children}
      </div>
    );
  }
}

export default PageWrapper;
