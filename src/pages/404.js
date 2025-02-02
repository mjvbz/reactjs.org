/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import React from 'react';
import {sharedStyles} from 'theme';
import { Link } from "gatsby";

type Props = {
  location: Location,
};

const PageNotFound = ({location}: Props) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>Page Not Found</Header>
          <TitleAndMetaTags title="React - Page Not Found" />
          <div css={sharedStyles.markdown}>
            <p>We couldn't find what you were looking for.</p>
            <p>
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </p>
            <p><Link to="/">Back to home</Link></p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default PageNotFound;
