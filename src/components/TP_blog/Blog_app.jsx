import React from 'react';
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
 * @param {string} param - Le paramètre associé à la page.
 * @returns {JSX.Element} Le composant React correspondant à la page demandée.
 */
function getPageContent(page, param) {
  if (page === 'home') return <BlogHome />;
  if (page === 'post') return <BlogSingle postId={param} />;
  if (page === 'contact') return <BlogContact />;
  return <BlogNotFound page={page} />;
}

const Blog_app = () => {
  const { page, param } = useHashNavigation();
  const pageContent = getPageContent(page, param);

  return (
    <>
      <Header page={page} />
      <div className="container my-3">{pageContent}</div>
    </>
  );
};

export default Blog_app;
