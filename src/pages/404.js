import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const UniversityPage = () => (
  <Layout>
    <SEO title="404 Page Not Found" />
    <div className="flex justify-center w-11/12 mx-auto pt-20">
      <h1 className="text-5xl font-bold text-neutral-800 mt-24">
        Page Not Found
      </h1>
    </div>
  </Layout>
);

export default UniversityPage;
