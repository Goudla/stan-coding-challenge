import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class PageHeader extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="page-header">
        {children}
      </div>
    );
  }
}

export default PageHeader;
