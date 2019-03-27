import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";

// Components
import Col from '../../components/Col';
import Container from '../../components/Container';
import FlexGrid from '../../components/FlexGrid';
import PageContainer from '../../components/PageContainer';
import SubNavbar from '../../components/SubNavbar';
import SubNavbarHeading from '../../components/SubNavbarHeading';
import Title from '../../components/Title';

/**
 *  The home scene of the application
 * @extends Component
 */
class Home extends Component<*> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <SubNavbar>
          <Container>
            <SubNavbarHeading>Popular Titles</SubNavbarHeading>
          </Container>
        </SubNavbar>
        <PageContainer>
          <FlexGrid>
            <Col>
              <Link
                to="/series">
                <Title>Popular Series</Title>
              </Link>
            </Col>
            <Col>
              <Link to="/movies">
                <Title>Popular Movies</Title>
              </Link>
            </Col>
          </FlexGrid>
        </PageContainer>
      </div>
    );
  }
}

export default Home;
