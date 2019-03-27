import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class PageContent extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="page-content">
        {children}
      </div>
    );
  }
}

export default PageContent;
