import React, { useEffect, useState } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { Post as PostType } from '../../../types/post.type';
import { fetchPosts, updatePost, deletePost, createPost } from '../../../apis/postHandlers';

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error('Lỗi khi lấy bài viết:', err);
      }
    };
    loadPosts();
  }, []);

  const handleImageClick = (post: PostType) => {
    navigate(`/profile/post/${post.id}`); // Navigate to the new page with post ID
  };

  return (
      <div className="post-container">
        <div className="create-button-container">
          <button className="create-button" >
            Create New Post
          </button>
        </div>

        {posts.map(post => (
            <div key={post.id} className="post-card">
              <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="post-image"
                  onClick={() => handleImageClick(post)}
              />
            </div>
        ))}
      </div>
  );
};

export default Post;