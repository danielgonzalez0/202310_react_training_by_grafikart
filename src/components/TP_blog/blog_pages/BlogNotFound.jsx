import React from 'react';

const BlogNotFound = ({ page }) => {
  return (
    <>
      <h1>Page introuvable</h1>
      <p>La page demandée {page} n'existe pas</p>
    </>
  );
};

export default BlogNotFound;
