import * as React from 'react';

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class PageFooter extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <div className="page-footer">
        {children}
      </div>
    );
  }
}

export default PageFooter;
