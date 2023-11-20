import React from 'react';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import { useFetch } from '../../../hooks/useFetch';
import Spinner from '../blog_components/Spinner';
import Alert from '../blog_components/Alert';

const BlogSingle = ({ postId }) => {
  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  useDocumentTitle(post?.title);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  return (
    <>
      <h1 className="mb-3">{post.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="img-fluid img-thumbnail my-3"
      />
      <p>{post.body}</p>
      <p>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
      </p>
    </>
  );
};

export default BlogSingle;
