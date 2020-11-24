import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Not Found</h2>
        <p>Not a Valid URL</p>
        <h2><Link to="/">Back to APPR</Link></h2>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
