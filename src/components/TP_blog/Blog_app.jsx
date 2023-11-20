import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHashNavigation } from '../../hooks/useHashNavigation';
import BlogHome from './blog_pages/BlogHome';
import BlogSingle from './blog_pages/BlogSingle';
import BlogContact from './blog_pages/BlogContact';
import BlogNotFound from './blog_pages/BlogNotFound';
import Header from './blog_components/Header';

/**
 * Récupère le contenu de la page en fonction du nom de la page.
 *
 * @param {string} page - Le nom de la page.
 * @returns {JSX.Element} Le composant React correspondant à la page demandée.
 */
function getPageContent(page) {
  if (page === 'home') return <BlogHome />;
  if (page === 'post') return <BlogSingle />;
  if (page === 'contact') return <BlogContact />;
  return <BlogNotFound page={page} />;
}

const Blog_app = () => {
  const { page } = useHashNavigation();
  const pageContent = getPageContent(page);

  return (
    <>
      <Header page={page} />
      <div className="container my-3">{pageContent}</div>
    </>
  );
};

export default Blog_app;
