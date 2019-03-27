import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Components
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import Container from '../../components/Container';
import FlexGrid from '../../components/FlexGrid';
import Footer from '../../components/Footer';
import FooterCopyright from '../../components/FooterCopyright';
import FooterExternalLinks from '../../components/FooterExternalLinks';
import FooterLink from '../../components/FooterLink';
import FooterLinks from '../../components/FooterLinks';
import FooterSocialLink from '../../components/FooterSocialLink';
import FooterSocialLinks from '../../components/FooterSocialLinks';
import FooterStoreLink from '../../components/FooterStoreLink';
import FooterStoreLinks from '../../components/FooterStoreLinks';
import IconAppStore from '../../components/IconAppStore';
import IconPlayStore from '../../components/IconPlayStore';
import IconWindowsStore from '../../components/IconWindowsStore';
import Navbar from '../../components/Navbar';
import NavbarColLeft from '../../components/NavbarColLeft';
import NavbarColRight from '../../components/NavbarColRight';
import NavbarHeading from '../../components/NavbarHeading';
import PageContent from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import PageWrapper from './components/PageWrapper';

// Scenes
import Entries from '../Entries';
import Home from '../Home';

/**
 * The root of the application
 * @extends Component
 */
class Root extends Component<*> {
  render() {
    return (
      <PageWrapper>
        <PageHeader>
          <Navbar>
            <Container>
              <FlexGrid>
                <NavbarColLeft>
                  <NavbarHeading>DEMO Streaming</NavbarHeading>
                </NavbarColLeft>
                <NavbarColRight>
                  <ButtonLink>Log in</ButtonLink>
                  <Button>Start your free trial</Button>
                </NavbarColRight>
              </FlexGrid>
            </Container>
          </Navbar>
        </PageHeader>
        <PageContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/series"
              render={() => <Entries title="Series" programType="series" />} />
            <Route
              exact
              path="/movies"
              render={() => <Entries title="Movies" programType="movie" />} />
            <Redirect from='/*' to="/" />
          </Switch>
        </PageContent>
        <PageFooter>
          <Footer>
            <Container>
              <FooterLinks>
                <FooterLink>Home</FooterLink>
                <FooterLink>Terms and Conditions</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>Collection Statement</FooterLink>
                <FooterLink>Help</FooterLink>
                <FooterLink>Manage Account</FooterLink>
              </FooterLinks>
              <FooterCopyright>Copyright © 2016 DEMO Streaming. All Rights Reserved.</FooterCopyright>
              <FooterExternalLinks>
                <FooterSocialLinks>
                  <FooterSocialLink>
                    <FaFacebookF size="30" />
                  </FooterSocialLink>
                  <FooterSocialLink>
                    <FaTwitter size="30" />
                  </FooterSocialLink>
                  <FooterSocialLink>
                    <FaInstagram size="30" />
                  </FooterSocialLink>
                </FooterSocialLinks>
                <FooterStoreLinks>
                  <FooterStoreLink>
                    <IconAppStore />
                  </FooterStoreLink>
                  <FooterStoreLink>
                    <IconPlayStore />
                  </FooterStoreLink>
                  <FooterStoreLink>
                    <IconWindowsStore />
                  </FooterStoreLink>
                </FooterStoreLinks>
              </FooterExternalLinks>
            </Container>
          </Footer>
        </PageFooter>
      </PageWrapper>
    );
  }
}

export default Root;
