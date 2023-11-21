import React from 'react';
import { useDocumentTitle } from '../../../../hooks/useDocumentTitle';
import { useFetch } from '../../../../hooks/useFetch';
import Spinner from '../../blog_components/Spinner';
import Alert from '../../blog_components/Alert';
import Button from '../../blog_components/Button';
import { useToggle } from '../../../../hooks/useToggle';
import EditPostModal from './EditPostModal';

const BlogSingle = ({ postId }) => {
  const {
    data: post,
    loading,
    error,
    setData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  useDocumentTitle(post?.title);
  const [isEditing, toggleEditing] = useToggle(false);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  // throw new Error();

  const handleSave = (data) => {
    setData({ ...post, ...data });
    toggleEditing()
  };

  return (
    <>
      <h1 className="mb-3">{post.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="img-fluid img-thumbnail my-3"
      />
      <p>{post.body}</p>
      {isEditing && (
        <EditPostModal
          post={post}
          onClose={toggleEditing}
          onSave={handleSave}
        />
      )}
      <Button variant={'secondary'} onClick={toggleEditing}>
        Editer l'article
      </Button>
      <p>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
      </p>
    </>
  );
};

export default BlogSingle;
