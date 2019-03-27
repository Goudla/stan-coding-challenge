import * as React from 'react';

// Components
import Container from '../../components/Container'

// Styles
import './styles.css';

type Props = {
  children: React.Node
};

class PageContainer extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <div className="page-container">
          {children}
        </div>
      </Container>
    );
  }
}

export default PageContainer;
