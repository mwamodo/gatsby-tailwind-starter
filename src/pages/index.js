import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Web Development, Mobile Applications, Websites" />
    <div className="flex justify-center w-11/12 mx-auto pt-20">
      <h1 className="text-5xl font-bold text-neutral-800 mt-24">
        Craft by{' '}
        <a
          href="https://nineafrica.com"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          nineafrica
        </a>
        . Coming Soon.
      </h1>
    </div>
  </Layout>
);

export default HomePage;
