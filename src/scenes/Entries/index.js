import React, { Component } from 'react';
import Helmet from 'react-helmet';

// Components
import Container from '../../components/Container';
import ErrorGate from '../../components/ErrorGate';
import InitialDataLoadedGate from '../../components/InitialDataLoadedGate';
import Message from '../../components/Message';
import PageContainer from '../../components/PageContainer';
import SubNavbar from '../../components/SubNavbar';
import SubNavbarHeading from '../../components/SubNavbarHeading';
import EntriesList from './components/EntriesList';
import EntriesRequest from './components/EntriesRequest';

type Props = {
  title: string,
  programType: string
};

class Entries extends Component<Props> {
  render() {
    const { title, programType } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <EntriesRequest />
        <SubNavbar>
          <Container>
            <SubNavbarHeading>Popular {title}</SubNavbarHeading>
          </Container>
        </SubNavbar>
        <PageContainer>
          <ErrorGate requestName="LOAD_PHOTOS">
            <InitialDataLoadedGate
              requestName="LOAD_PHOTOS"
              LoadingComponent={<Message>Loading...</Message>}>
              <EntriesList programType={programType} />
            </InitialDataLoadedGate>
          </ErrorGate>
        </PageContainer>
      </div>
    );
  }
}

export default Entries;
